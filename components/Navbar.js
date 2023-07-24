import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex fixed top-0 lg:mt-20 lg:left-0 xl:left-96">
      <ul className="flex gap-4 items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <li className="hover:font-semibold focus-within:font-bold focus-within:scale-x-125 transition duration-200">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:font-semibold focus-within:font-bold focus-within:scale-x-125 transition duration-200">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="hover:font-semibold focus-within:font-bold focus-within:scale-x-125 transition duration-200">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:font-semibold focus-within:font-bold focus-within:scale-x-125 transition duration-200">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
