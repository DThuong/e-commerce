import React from "react";
import { navigation } from "../utils/contants";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="w-main border-y mb-6 h-[48px] py-2 flex items-center justify-start">
      {navigation.map((el) => (
        <NavLink to={el.path} key={el.id} className={({isActive}) => isActive ? 'pr-12 hover:text-main text-main' : 'pr-12 hover:text-main'}>
          {el.value}
        </NavLink>
      ))}
    </div>
  );
};

export default Navigation;
