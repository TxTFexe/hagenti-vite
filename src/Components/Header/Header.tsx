import React, { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import NavItemCount from "./NavItemCount";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import Search from "./Search/Search";
import headerStyles from "./Header.module.scss";
import CartPopup from "./CartPopup";
import UserPopup from "./UserPopup";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Header: React.FC = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const { totalCount, items, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const toggleAuthVisible = () => {
    setShowUserPopup(false);
    setAuthVisible((prev) => !prev);
  };

  return (
    <header className={headerStyles.header__sticky}>
      <div className="container">
        <div className={headerStyles.header__nav}>
          <Link to="/" className={headerStyles.logo}>
            Hagenti
          </Link>
          <Link to="/Configurator" className={headerStyles.nav__button}>
            <span>Конфигуратор ПК</span>
          </Link>
          <Search />
          <ul className={headerStyles.nav__list}>
            <li
              onMouseEnter={() => setShowUserPopup(true)}
              onMouseLeave={() => setShowUserPopup(false)}
            >
              <Link
                to={"/"}
                className={headerStyles.nav__item}
                onClick={toggleAuthVisible}
              >
                <FiUser />
                {authVisible && <ModalLogin onClose={toggleAuthVisible} />}
                {/*Создать способ вытягивания имени активного пользователя*/}
                Вадим
              </Link>
              <div className={showUserPopup ? "opacity_1" : "opacity_0"}>
                <UserPopup />
              </div>
            </li>
            <li>
              <Link to={"/Favorite"} className={headerStyles.nav__item}>
                <AiOutlineHeart className="nav-item-icon" />
                Избранное
              </Link>
            </li>
            <li
              onMouseEnter={() => setShowCartPopup(true)}
              onMouseLeave={() => setShowCartPopup(false)}
            >
              <NavItemCount props={[items, totalCount]} />
              <Link to={"/Cart"} className={headerStyles.nav__item}>
                <FiShoppingCart className="nav-item-icon" />
                Корзина
              </Link>
              <div className={showCartPopup ? "opacity_1" : "opacity_0"}>
                {totalCount > 0 && (
                  <CartPopup
                    cartItems={items}
                    cartTotalPrice={totalPrice}
                    cartTotalCount={totalCount}
                  />
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
