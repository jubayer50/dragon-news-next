"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginBtn = async (data) => {
    console.log(data);
    const { email, password } = data;

    const { data: authData, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: false,
      callbackURL: "/",
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen">
      <div className="max-w-285 mx-auto my-12 flex justify-center items-center">
        <div className="bg-white p-7 md:p-20 rounded-md">
          <h2 className="text-[#403F3F] font-semibold text-2xl md:text-4xl pb-6">
            Login your account
          </h2>

          <form onSubmit={handleSubmit(handleLoginBtn)}>
            <div className="pt-4 md:pt-6 border-t border-[#E7E7E7] space-y-2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-semibold text-lg md:text-xl">
                  Email Address
                </legend>
                <input
                  type="email"
                  {...register("email", { required: "Email is required." })}
                  className="input w-full"
                  placeholder="Type your Email"
                />

                {errors.email && (
                  <p className="mt-1 text-red-600">{errors.email.message}</p>
                )}
              </fieldset>

              <fieldset className="fieldset relative">
                <legend className="fieldset-legend font-semibold text-lg md:text-xl">
                  Password
                </legend>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="input w-full"
                  placeholder="Type your Password"
                />

                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-[50%] translate-y-[-50%]"
                >
                  {showPassword ? (
                    <IoEye className="text-xl" />
                  ) : (
                    <IoEyeOff className="text-xl" />
                  )}
                </div>

                {errors.password && (
                  <p className="mt-1 text-red-600">{errors.password.message}</p>
                )}
              </fieldset>
            </div>

            <div className="my-5">
              <button
                type="submit"
                className="btn text-lg md:text-xl font-medium md:font-semibold w-full bg-[#403F3F] text-white"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-[#706F6F] font-semibold text-center">
            Don’t Have An Account ?{" "}
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
