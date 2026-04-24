import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-[#403F3F]">404 Not Found!</h2>

        <div className="mx-auto">
          <Link href={"/"}>
            <button className="btn">Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
