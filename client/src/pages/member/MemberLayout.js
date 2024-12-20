import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import path from "../../utils/path";
import { MemberSidebar } from "../../components";

const MemberLayout = () => {
  const { isLoggedIn, current } = useSelector((state) => state.user);
  if (!isLoggedIn || !current)
    return <Navigate to={`/${path.LOGIN}`} replace={true} />;
  return (
    <div className="flex">
      <MemberSidebar />
      <div className="flex-auto bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MemberLayout;
