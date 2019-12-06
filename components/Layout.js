import React from "react";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="antialiased bg-gray-300">
    <Header />
    {children}
  </div>
);

export default Layout;
