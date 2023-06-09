import React from "react";
import headerStyles from "./Header.module.scss";
import { CartItem } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

type CartPopupProps = {
  cartTotalPrice: number;
  cartTotalCount: number;
  cartItems: CartItem[];
};

const CartPopup: React.FC<CartPopupProps> = ({
  cartTotalPrice,
  cartTotalCount,
  cartItems,
}) => {
  return (
    <div className={headerStyles.cart__popup}>
      <div className={headerStyles.cart__popup__title}>
        <span>
          {cartTotalCount}.{" "}
          {cartTotalCount > 1 && cartTotalCount < 5
            ? "Товара"
            : cartTotalCount > 4
            ? "Товаров"
            : "Товар"}
        </span>
        <span>{cartTotalPrice.toLocaleString()}₽</span>
      </div>
      <div className={headerStyles.cart__popup__items}>
        {cartItems.map((item: CartItem, index) => (
          <div key={index} className={headerStyles.cart__popup__item}>
            <Link to={"GPU/" + item.id}>{item.name}</Link>
            <div>
              <span>{item.price.toLocaleString()}₽</span>
              <span> x {item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPopup;
