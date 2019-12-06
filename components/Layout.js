import React from "react";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="antialiased bg-gray-100">
    <Header />
    {children}
  </div>
);

export default Layout;
