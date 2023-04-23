import React from "react";
import { RootState, useAppDispath } from "../redux/store";
import { useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import {
  FavoriteItem,
  removeFavoriteItem,
} from "../redux/slices/favoriteSlice";
import { Link } from "react-router-dom";
import { CartItem, addItem } from "../redux/slices/cartSlice";

const Favorite: React.FC = () => {
  const dispath = useAppDispath();
  const { totalCount, items } = useSelector(
    (state: RootState) => state.favorite
  );

  const addToCart = (item: CartItem) => {
    dispath(addItem(item));
  };

  const onClickDelete = (id: string) => {
    dispath(removeFavoriteItem(id));
  };

  return (
    <div className="container">
      <div className="favorite">
        <div className="favorite-title">
          <h1>Избранное</h1>
          <span>{totalCount}</span>
        </div>
        <div className="favorite-grid">
          {items.map((item: FavoriteItem, index) => (
            <div key={index} className="favorite-product-item">
              <AiFillHeart
                title="Удалить из избранного"
                onClick={() => onClickDelete(item.id)}
              />
              <Link to={"/gpu/" + item.id}>
                <img src={item.pic} draggable="false" />
              </Link>
              <Link to={"/gpu/" + item.id}>{item.name}</Link>
              <br />
              <br />
              <span>{item.price.toLocaleString()}₽</span>
              <br />
              <br />
              <button onClick={() => addToCart(item)}>В корзину</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
