import React, { Fragment } from "react";
import logo from "../assets/logo.png";
import icons from "../utils/icons";
import { Link } from "react-router-dom";
import path from "../utils/path";
import { useSelector } from "react-redux";

const { FaUserCircle, FaShoppingCart } = icons;
const Header = () => {
  const { current } = useSelector((state) => state.user);
  return (
    <div className="w-main flex justify-between h-[110px] py-[35px] overflow-hidden">
      <div>
        <Link to={`/${path.HOME}`}>
          <img
            src={logo}
            alt="logo"
            className="max-h-[110px] object-contain object-top transform -translate-y-9"
          />
        </Link>
      </div>

      <div className="flex items-center justify-center">
        {current && (
          <Fragment>
            <div className="flex items-center justify-center gap-2 px-6 border-r cursor-pointer">
              <FaShoppingCart color="red"></FaShoppingCart>
              <span>items (0)</span>
            </div>
            <Link
              to={
                +current?.role === 2002
                  ? `${path.ADMIN}/${path.DASHBOARD}`
                  : `${path.MEMBER}/${path.PERSONAL}`
              }
              className="flex items-center justify-center px-6 border-r gap-2 cursor-pointer"
            >
              <FaUserCircle size={24} color="red"></FaUserCircle>
              <span>profile</span>
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
