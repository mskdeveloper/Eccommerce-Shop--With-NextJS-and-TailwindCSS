import React from "react";
import { Store } from "lucide-react";

const Header = () => {
  return (
    <header className="flex  bg-gray-300 min-h-24 items-center">
      <h1 className="px-2">ELECTRO SHOP</h1>
      <Store />
    </header>
  );
};

export default Header;
