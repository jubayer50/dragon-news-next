"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children, className }) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        className={`text-[#706F6F] text-lg ${pathName === href ? "text-[#403F3F] font-semibold" : ""} ${className}`}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default MyNavLink;
