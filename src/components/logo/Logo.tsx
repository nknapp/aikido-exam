import React from "react";
import css from "./Logo.module.scss";
import logo from "src/assets/logo.svg";

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return <img src={logo} className={`${className} ${css.logo}`} alt="Logo" />;
};
