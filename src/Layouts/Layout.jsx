import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";
import RouteLoader from "../components/RouteLoader";

import RouteAnimation from "../components/RouteAnimation";
import Animation from "../components/Animation";

const Layout = () => {
  return (
    <>
      <header className="">
        <nav className="max-w-7xl mx-auto">
          <Navbar />
        </nav>
      </header>

      <main className="min-h-[calc(100vh-571px)]">
        <RouteLoader />
        <RouteAnimation>
          <Outlet />
        </RouteAnimation>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </main>

      <footer>
        <Animation delay={0.3}>
          <Footer />
        </Animation>
      </footer>
    </>
  );
};

export default Layout;
