import React from "react";
import {
  removeItem,
  incrementItemCount,
  decrementItemCount,
  addCheckedItem,
  removeCheckedItem,
} from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { useAppDispath } from "../redux/store";

type CartItemProps = {
  item: {
    id: string;
    pic: string;
    name: string;
    price: number;
    count: number;
    type: string;
  };
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispath();
  const [checkedCheckbox, setCheckedCheckbox] = React.useState(false);

  const { id, pic, name, price, count, type } = item;

  const onClickIncrementCount = () => {
    dispatch(incrementItemCount(item));
  };

  const onClickDecrementCount = () => {
    dispatch(decrementItemCount(item));
  };

  const onCLickDelete = () => {
    dispatch(removeItem(id));
  };

  React.useEffect(() => {
    dispatch(removeCheckedItem(item.id));
  }, []);

  const changeCheckbox = () => {
    console.log(checkedCheckbox);
    setCheckedCheckbox((prev) => !prev);
    console.log(checkedCheckbox);
    if (checkedCheckbox === false) {
      dispatch(addCheckedItem(item));
    } else {
      dispatch(removeCheckedItem(item.id));
    }
  };

  return (
    <>
      <div className="cart-item">
        {
          <div className="cart-item-content">
            <label className="container__checkbox">
              <input
                type="checkbox"
                checked={checkedCheckbox}
                onChange={changeCheckbox}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
            <div className="cart-item__img">
              <img src={pic} alt={name} draggable="false" />
            </div>
            <div className="cart-item__title">
              <Link to={"/GPU" + "/" + id}>{name}</Link>
              <div className="cart-item__count">
                <button
                  className={count === 1 ? "disabled" : ""}
                  onClick={onClickDecrementCount}
                >
                  -
                </button>
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
  );
};

export default CartItem;
