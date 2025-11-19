import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Logo></Logo>
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)] gap-8 flex-col lg:flex-row">
          <div className="flex-1 w-full max-w-md">
            <Outlet></Outlet>
          </div>
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <img
              src={authImage}
              alt="Authentication"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
