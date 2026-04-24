import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div>
        <h2 className="text-[#403F3F] text-xl font-semibold">Login with</h2>

        <div className="mt-4 space-y-2">
          <div>
            <button className="btn border border-[#403F3F80] bg-transparent gap-3 w-full">
              <FaGoogle className="text-xl" /> Login with Google
            </button>
          </div>

          <div>
            <button className="btn border border-[#403F3F80] bg-transparent gap-3 w-full">
              <FaGithub className="text-xl" /> Login with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
