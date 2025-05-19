import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router";

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

      <footer></footer>
    </>
  );
};

export default Layout;
