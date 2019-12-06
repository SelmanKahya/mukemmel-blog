import React from "react";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="antialiased">
    <Header />
    {children}
  </div>
);

export default Layout;
