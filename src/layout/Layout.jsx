import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="max-w-7xl mx-auto">
          <Navbar />
        </nav>
      </header>

      <main className="min-h-[calc(100vh-571px)]">
        <Outlet />

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
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
