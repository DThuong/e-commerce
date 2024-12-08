import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import path from "../../utils/path";

const MemberLayout = () => {
  const { isLoggedIn, current } = useSelector(state => state.user);
  if (!isLoggedIn || !current)
    return <Navigate to={`/${path.LOGIN}`} replace={true} />;
  return (
    <div>
      MemberLayout
      <Outlet />
    </div>
  );
};

export default MemberLayout;
