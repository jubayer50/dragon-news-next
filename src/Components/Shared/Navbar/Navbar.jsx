"use client";

import Image from "next/image";
import MyNavLink from "./MyNavLink";
import UserIcon from "@/assets/user.png";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

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

        {isPending ? (
          <p>Loading...</p>
        ) : user ? (
          <div className="flex items-center gap-1 md:gap-4">
            <p className="text-[12px] md:text-[16px] font-medium text-blue-400">
              {user.name}
            </p>
            <Image src={UserIcon} alt="user" width={40} height={40}></Image>
            <button
              onClick={async () => await authClient.signOut()}
              className="btn bg-[#403F3F] text-white md:font-semibold md:text-lg"
            >
              Log out
            </button>
          </div>
        ) : (
          <Link href={"/signin"}>
            <button className="btn bg-[#403F3F] text-white md:font-semibold md:text-lg">
              Login
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
