"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import { useState } from "react";

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
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the side menu
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        aria-label="Open navigation menu"
      >
        <CiMenuFries className="text-[32px] text-gray-900" />
      </SheetTrigger>
      <SheetContent className="flex flex-col p-4">
        {/* logo */}
        <div className="flex justify-center items-center mb-8 mt-4">
          <Link href="/">
            <Image
              src="/images/nadibettulogo.jpg"
              alt="Nadibettu Logo"
              width={150}
              height={150}
              className="rounded-lg shadow-lg"
            />
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex flex-col justify-center items-center gap-6">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={handleLinkClick} // Close the menu on link click
                className={`${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : "text-white"
                } text-base capitalize hover:text-accent transition-all`}
                aria-current={link.path === pathname ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
