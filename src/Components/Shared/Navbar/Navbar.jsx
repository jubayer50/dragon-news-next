import Image from "next/image";
import MyNavLink from "./MyNavLink";
import UserIcon from "@/assets/user.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-285 mx-auto px-2">
      <nav className="flex justify-between items-center">
        <div className="hidden md:block"></div>

        <ul className="flex items-center gap-2.5 md:gap-4">
          <li>
            <MyNavLink href={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink href={"/about"}>About</MyNavLink>
          </li>
          <li>
            <MyNavLink href={"/career"}>Career</MyNavLink>
          </li>
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <Image src={UserIcon} alt="user" width={40} height={40}></Image>
          <Link href={"/signin"}>
            <button className="btn bg-[#403F3F] text-white md:font-semibold md:text-lg">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
