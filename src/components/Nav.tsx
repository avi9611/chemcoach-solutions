"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "What We Do",
    path: "/whatwedo",
  },
  {
    name: "Our Services",
    path: "/services",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-blue-700 border-b-2 border-blue-600"
            } capitalize font-semibold hover:text-blue-800 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
