import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div className="h-screen">
      <div className="max-w-285 mx-auto my-12 flex justify-center items-center">
        <div className="bg-white p-7 md:p-20 rounded-md">
          <h2 className="text-[#403F3F] font-semibold text-2xl md:text-4xl pb-6">
            Login your account
          </h2>

          <div className="pt-4 md:pt-6 border-t border-[#E7E7E7] space-y-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-semibold text-lg md:text-xl">
                Email Address
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type your Email"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend font-semibold text-lg md:text-xl">
                Password
              </legend>
              <input
                type="password"
                className="input w-full"
                placeholder="Type your Password"
              />
            </fieldset>
          </div>

          <div className="my-5">
            <button className="btn text-lg md:text-xl font-semibold w-full bg-[#403F3F] text-white">
              Login
            </button>
          </div>

          <p className="text-[#706F6F] font-semibold text-center">
            Dont’t Have An Account ?{" "}
            <Link href={"/register"} className="text-[#F75B5F]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
