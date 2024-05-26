import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const page = () => {
  return (
    <main className="container m-auto">
      <div>
        <Navbar></Navbar>
        <Products></Products>
      </div>
    </main>
  );
};

export default page;
