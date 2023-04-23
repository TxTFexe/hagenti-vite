import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header, Footer } from "../Components";

const MainLayout = () => {
  return (
    <>
        <Header/>
          <main>
            <Outlet/>
          </main>
        <Footer/>
    </> 
  )
}

export default MainLayout;