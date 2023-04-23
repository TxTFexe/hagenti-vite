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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/:categoryName" element={<Category />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/Develop" element={<Develop />} />
          <Route path="/Configurator" element={<Configurator />} />
          <Route path="/:categoryName/:productId" element={<ProductPage />} />
          <Route path="/my-account" element={<UserCabinet />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
