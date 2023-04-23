import React from "react";
import headerStyles from "./Header.module.scss";
import { CartItem } from "../../redux/slices/cartSlice";

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
        <span>{cartTotalCount}. Товар</span>
        <span>{cartTotalPrice.toLocaleString()}₽</span>
      </div>
      <div className={headerStyles.cart__popup__items}>
        {cartItems.map((item: CartItem, index) => (
          <div key={index} className={headerStyles.cart__popup__item}>
            <span>{item.name}</span>
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
