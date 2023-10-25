import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, text, activeClasses }) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <>
      <Link className={`${isActive ? activeClasses : ""}`} href={href}>
        {text}
      </Link>
    </>
  );
};
export default NavLink;
