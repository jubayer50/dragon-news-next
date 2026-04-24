import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center mt-6 md:mt-12.5 px-2 space-y-1 md:space-y-2">
      <div>
        <Link href={"/"}>
          <Image
            className="mx-auto w-70 md:w-[320px] "
            src={Logo}
            alt="logo"
            width={0}
            height={0}
          ></Image>
        </Link>
      </div>

      <p className="text-[#706F6F] md:text-lg">
        Journalism Without Fear or Favour
      </p>

      <div>
        <h2 className="text-[#706F6F]  md:text-xl font-medium">
          <span className="text-[#403F3F]">{format(new Date(), "EEEE")},</span>{" "}
          {format(new Date(), "LLLL dd, yyyy")}
        </h2>
      </div>
    </div>
  );
};

export default Header;
