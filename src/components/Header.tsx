import React from "react";
import Search from "./Search";

type HeaderProps = {
  name: string
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <>
      <div className="text-gray-900">
        <h1 className="text-5xl">{name}</h1>
        <Search />
      </div>
    </>
  );
};

export default Header;