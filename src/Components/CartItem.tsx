import React from "react";
import { removeItem, incrementItemCount, decrementItemCount } from '../redux/slices/cartSlice'
import { Link } from "react-router-dom";
import { useAppDispath } from "../redux/store";

type CartItemProps = { 
    item: {
        id:string,
        pic:string,
        name:string,
        price:number,
        count:number,
        type:string,
    };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useAppDispath();

    const {id, pic, name, price, count, type} = item;

    const onClickIncrementCount = () => {
        dispatch(incrementItemCount(item))
    }

    const onClickDecrementCount = () => {
        dispatch(decrementItemCount(item))
    }

    const onCLickDelete = () => {
        dispatch(removeItem(id))
    }

    //(В будущем) Добавить чекбоксы

    return(
    <>
        <div className="cart-item">
            {
                <div className="cart-item-content">
                {/*Чекбокс*/}
                <div className="cart-item__img">
                    <img src={pic} alt={name} draggable="false"/>
                </div>
                <div className="cart-item__title">
                    <Link to={"/Category/GPU" + "/" + id}>{name}</Link>
                    <div className="cart-item__count">
                        <button className={count === 1 ? 'disabled' : ''} onClick={onClickDecrementCount}>-</button>
                        <span>{count}</span>
                        <button onClick={onClickIncrementCount}>+</button>
                    </div>
                    <span onClick={onCLickDelete}>Удалить</span>
                </div>
                    <div className="cart-item__price">
                        <p>{price.toLocaleString()}₽</p>
                    </div>
                </div>
            }
        </div>
    </>
    )
}

export default CartItem;