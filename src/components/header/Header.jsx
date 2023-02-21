import React from "react";
import css from "./header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span> logoinfo</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}></ul>
          <li>collections</li>
          <li>brands</li>
          <li>New</li>
          <li>sales</li>
          <li>ENG</li>
          <div />
          <input type="text" className={css.search} />
          <CgShoppingBag className={css.cart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
