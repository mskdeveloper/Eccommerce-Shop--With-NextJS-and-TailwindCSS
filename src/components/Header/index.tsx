import React from "react";
import { Store } from "lucide-react";

const Header = () => {
  return (
    <header className="flex  bg-gray-100 shadow-gray-200 shadow-2xl min-h-24 items-center justify-center">
      <h1 className="px-2">ELECTRO SHOP</h1>
      <Store color="#cf4985" />
    </header>
  );
};

export default Header;
