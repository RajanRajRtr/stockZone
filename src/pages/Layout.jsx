import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/Admin");

  return (
    <>
      {!isAdminRoute && <NavBar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default Layout;
