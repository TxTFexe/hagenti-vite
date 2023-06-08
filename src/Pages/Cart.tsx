import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, EmptyCart } from "../Components";
import { RootState, useAppDispath } from "../redux/store";
import { clearItems } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const dispatch = useAppDispath();
  const { items, totalCheckedCount, totalCheckedPrice } = useSelector(
    (state: RootState) => state.cart
  );

  // if (!totalCount) {
  //   return <EmptyCart />;
  // }

  const clearCart = () => {
    dispatch(clearItems());
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="cart">
        <div className="cart-content-main-block">
          <div className="cart-title">
            <h1>Корзина</h1>
            <div className="cart-item__checkbox"></div>
            <button onClick={clearCart}>Очистить всё</button>
          </div>
          <div className="cart-items">
            {items.map((item, index: number) => (
              <CartItem item={item} key={`${item.id}_${index}`} />
            ))}
          </div>
        </div>
        <div className="cart-content-side-block">
          <div className="order-details">
            <h3>Детали заказа</h3>
            <div className="order-details-item">
              <p>
                {totalCheckedCount}.{" "}
                {totalCheckedCount > 1 && totalCheckedCount < 5
                  ? "Товара"
                  : totalCheckedCount > 4
                  ? "Товаров"
                  : totalCheckedCount === 0
                  ? "Ничего не выбрано"
                  : "Товар"}
              </p>
              <p>{totalCheckedPrice.toLocaleString()}₽</p>
            </div>
            <div className="order-details-item sum">
              <p>Сумма</p>
              <p>{totalCheckedPrice.toLocaleString()}₽</p>
            </div>
          </div>
          <Link to="/checkout">Оформить заказ</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
