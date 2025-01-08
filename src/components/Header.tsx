import Link from "next/link";
import { Button } from "./ui/button";

import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-4 text-gray-100 bg-gray-400">
      <div className="container mx-auto flex justify-between items-center">
        {/*Logo */}
        <Link href="/">
          <Image
            src="/images/nadibettulogo.jpg"
            alt="Nadibettu Logo"
            width={200}
            height={200}
            className="rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:animate-bounce"
          />
        </Link>

        {/* desktop only visible nav */}
        <div className="hidden xl:flex items-center gap-12">
          <Nav />
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
