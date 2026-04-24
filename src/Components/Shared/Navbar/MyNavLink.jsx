"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children, className }) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        className={`text-[#706F6F] md:text-lg ${pathName === href ? "text-[#1a1a1a] font-semibold" : ""} ${className}`}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default MyNavLink;
