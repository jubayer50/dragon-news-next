import Navbar from "@/Components/Shared/Navbar/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-[#F3F3F3] py-5">
      <Navbar></Navbar>

      {children}
    </div>
  );
};

export default AuthLayout;
