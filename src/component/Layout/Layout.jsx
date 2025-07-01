import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="layout bg-gray-100 md:px-20">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
