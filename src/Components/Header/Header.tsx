import React, { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import NavItemCount from "./NavItemCount";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalAuth/ModalLogin";
import Search from "./Search/Search";
import headerStyles from "./Header.module.scss";
import CartPopup from "./CartPopup";
import UserPopup from "./UserPopup";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectIsAuth } from "../../redux/slices/authSlice";

const Header: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
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
          <div className={headerStyles.logo__and__btn__container}>
            <Link to="/" className={headerStyles.logo}>
              <span>Hagenti</span>
            </Link>
            <Link to="/Configurator" className={headerStyles.nav__button}>
              <span>Конфигуратор ПК</span>
            </Link>
          </div>
          <Search />
          <ul className={headerStyles.nav__list}>
            <li
              onMouseEnter={() => setShowUserPopup(true)}
              onMouseLeave={() => setShowUserPopup(false)}
            >
              <a
                className={headerStyles.nav__item}
                onClick={isAuth ? () => {} : toggleAuthVisible}
              >
                <FiUser />
                {/* {isAuth ? userData?.fullName : "Войти"} */}
              </a>
              <div
                className={showUserPopup && isAuth ? "opacity_1" : "opacity_0"}
              >
                <UserPopup />
              </div>
            </li>
            <li>
              <Link to={"/Favorite"} className={headerStyles.nav__item}>
                <AiOutlineHeart className="nav-item-icon" />
                {/* Избранное */}
              </Link>
            </li>
            <li
              onMouseEnter={() => setShowCartPopup(true)}
              onMouseLeave={() => setShowCartPopup(false)}
            >
              <NavItemCount props={[items, totalCount]} />
              <Link to={"/Cart"} className={headerStyles.nav__item}>
                <FiShoppingCart className="nav-item-icon" />
                {/* Корзина */}
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
          {authVisible && <ModalLogin onClose={toggleAuthVisible} />}
        </div>
      </div>
    </header>
  );
};
export default Header;
