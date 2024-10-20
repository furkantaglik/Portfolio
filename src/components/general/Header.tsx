"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isOpen &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="relative md:mt-5 mt-2">
      <nav className="flex justify-between items-center font-semibold">
        <div className="rounded p-1 pe-3 border border-primary text-primary bg-black">
          <Link href="/" className="text-3xl italic " aria-label="Ana Sayfa">
            F T
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="menu"
            aria-label="Menüyü aç/kapa"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
        <ul
          ref={menuRef}
          id="menu"
          className={`absolute top-0 left-0 right-0 bg-background justify-center flex-col flex items-center shadow-lg transition-transform transform ${
            isOpen ? "translate-y-0 z-10 bg-background" : "-translate-y-full"
          } md:translate-y-0 md:flex md:static md:bg-transparent md:shadow-none md:flex-row gap-5 md:items-center`}
          role="menu"
        >
          {isOpen && (
            <div className="absolute top-3 right-3">
              <button onClick={toggleMenu} aria-label="Menüyü kapat">
                <X className="w-6 h-6 text-primary" />
              </button>
            </div>
          )}
          {["about", "skills", "projects", "contact"].map((item) => (
            <li
              key={item}
              role="menuitem"
              className="border-b-2 border-transparent hover:border-primary hover:text-primary transition-all p-2"
            >
              <Link
                href={`/#${item}`}
                aria-label={`${
                  item.charAt(0).toUpperCase() + item.slice(1)
                } sayfasına git`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
