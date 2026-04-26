const RegisterPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-285 mx-auto my-12 flex justify-center items-center">
        <div className="bg-white p-7 md:p-20 rounded-md">
          <h2 className="text-[#403F3F] font-semibold text-2xl md:text-4xl pb-6">
            Register your account
          </h2>

          <div className="pt-4 md:pt-6 border-t border-[#E7E7E7] space-y-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-semibold text-lg md:text-xl">
                Your Name
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type your Name"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend font-semibold text-lg md:text-xl">
                Photo URL
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type your Photo link"
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

            <div className="flex gap-3 items-center">
              <input type="checkbox" className="checkbox" />
              <legend className="fieldset-legend text-[#706F6F]">
                <span className="font-normal">Accept</span> Term & Condition
              </legend>
            </div>
          </div>

          <div className="my-5">
            <button className="btn text-lg md:text-xl font-semibold w-full bg-[#403F3F] text-white">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
