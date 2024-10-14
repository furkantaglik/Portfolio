"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:mt-5 mt-2 ">
      <nav className="flex justify-between font-semibold items-center">
        <div className="rounded p-1 pe-3 border border-primary text-primary">
          <Link href="/" className="text-3xl italic">
            F T
          </Link>
        </div>
        <ul className="hidden md:flex text-xl font-extrabold gap-x-5 ">
          <li className="hover:text-primary hover:cursor-pointer transition-all border-b-2 border-primary ">
            About
          </li>
          <li className="hover:text-primary hover:cursor-pointer transition-all border-b-2 border-primary ">
            Skills
          </li>
          <li className="hover:text-primary hover:cursor-pointer transition-all border-b-2 border-primary ">
            Projects
          </li>
          <li className="hover:text-primary hover:cursor-pointer transition-all border-b-2 border-primary ">
            Contact
          </li>
        </ul>

        <div className="md:hidden">
          <Menu
            size={32}
            className="cursor-pointer text-primary"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>

      <ul
        className={`flex flex-col mt-5 space-y-3 text-xl font-extrabold md:hidden text-center w-fit mx-auto transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 "
            : "opacity-0 -translate-y-10 pointer-events-none hidden"
        }`}
      >
        <li className="hover:text-primary hover:cursor-pointer transition-all border-b-2 border-primary ">
          About
        </li>
        <li className="hover:text-primary hover:cursor-pointer transition-all border-b-2 border-primary ">
          Skills
        </li>
        <li className="hover:text-primary hover:cursor-pointer transition-all border-b-2 border-primary ">
          Projects
        </li>
        <li className="hover:text-primary hover:cursor-pointer transition-all border-b-2 border-primary ">
          Contact
        </li>
      </ul>
    </header>
  );
}
