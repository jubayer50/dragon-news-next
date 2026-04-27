"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { name, photo, email, password, terms } = data;

    const { data: authData, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/signin",
    });

    if (authData) {
      alert("Register successful!");
    }

    if (error) {
      alert(error.message);
      return;
    }
    redirect("/signin");
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="max-w-285 mx-auto my-12 flex justify-center items-center">
        <div className="bg-white p-7 md:p-20 rounded-md">
          <h2 className="text-[#403F3F] font-semibold text-2xl md:text-4xl pb-6">
            Register your account
          </h2>

          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="pt-4 md:pt-6 border-t border-[#E7E7E7] space-y-2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-semibold text-lg md:text-xl">
                  Your Name
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type your Name"
                  {...register("name", { required: "Name is Required." })}
                />

                {errors.name && (
                  <p className="mt-1 text-red-600">{errors.name.message}</p>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend font-semibold text-lg md:text-xl">
                  Photo URL
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type your Photo link"
                  {...register("photo")}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend font-semibold text-lg md:text-xl">
                  Email
                </legend>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Type your Email"
                  {...register("email", { required: "Email is Required." })}
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
                  className="input w-full"
                  placeholder="Type your Password"
                  {...register("password", {
                    required: "Password is Required.",
                  })}
                />

                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-[50%] translate-y-[-50%]"
                >
                  {showPassword ? (
                    <IoEyeOff className="text-xl" />
                  ) : (
                    <IoEye className="text-xl" />
                  )}
                </div>

                {errors.password && (
                  <p className="mt-1 text-red-600">{errors.password.message}</p>
                )}
              </fieldset>

              <div className="">
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    className="checkbox"
                    {...register("terms", {
                      required: "Missing Accept Term & Condition.",
                    })}
                  />
                  <legend className="fieldset-legend text-[#706F6F]">
                    <span className="font-normal">Accept</span> Term & Condition
                  </legend>
                </div>

                {errors.terms && (
                  <p className="mt-1 text-red-600 text-[12px]">
                    {errors.terms.message}
                  </p>
                )}
              </div>
            </div>

            <div className="my-5">
              <button
                type="submit"
                className="btn text-lg md:text-xl font-medium md:font-semibold w-full bg-[#403F3F] text-white"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
