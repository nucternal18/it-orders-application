import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";

const Header: React.FC = () => {
  return (
    <header className="flex h-12 flex-col justify-center bg-stone-100">
      <nav className="container mx-auto">
        <ul className="flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500">
          <li>
            <Link href="/">IT Orders Application</Link>
          </li>
          <li>
            <LoginButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
