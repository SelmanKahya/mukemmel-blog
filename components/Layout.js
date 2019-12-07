import React from "react";
import Header from "./Header";
import "../styles/tailwind.css";

const Layout = ({ children }) => (
  <div className="antialiased bg-gray-100 text-gray-900">
    <Header />
    {children}
  </div>
);

export default Layout;
