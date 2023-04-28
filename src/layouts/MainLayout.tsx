import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../Components";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
