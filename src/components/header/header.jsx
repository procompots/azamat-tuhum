import React from "react";
import "../header/header.css";

function Header() {
  return (
    <>
      <header>
        <h1>Hello Evano 👋🏼,</h1>
        <div>
          <input placeholder="Search" type="text" />
          <i class="fas fa-search"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
