import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="max-w-7xl mx-auto">
            <Navbar/>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
