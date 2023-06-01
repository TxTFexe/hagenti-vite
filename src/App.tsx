import {
  Home,
  Cart,
  Category,
  Test,
  Develop,
  Configurator,
  ProductPage,
  UserCabinet,
  Favorite,
} from "./Pages";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useAppDispath } from "./redux/store";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/authSlice";
import React from "react";
import { useSelector } from "react-redux";
import Checkout from "./Pages/Checkout";

function App() {
  const dispath = useAppDispath();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispath(fetchAuthMe());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:categoryName" element={<Category />} />
          <Route path="/test" element={<Test />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/develop" element={<Develop />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/:categoryName/:productId" element={<ProductPage />} />
          <Route path="/my-account" element={<UserCabinet />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
