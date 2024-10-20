import React from "react";
import Image from "next/image";
import { FileUser, Github, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";
import { FaMediumM } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col-reverse md:flex-row justify-between md:mt-32 mt-10 max-w-screen-lg gap-y-20 md:gap-x-10 mx-auto px-5"
      aria-labelledby="about-section"
    >
      <h2 id="about-section" className="sr-only">
        About Me Section
      </h2>
      <div className="text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Hello It's Me
        </h3>
        <h1 className="text-3xl md:text-4xl font-extrabold">Furkan Tağlık</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-5">
          And I'm a{" "}
          <span className="text-primary">Fullstack Web Developer</span>
        </h2>
        <p>
          Hey, I'm Furkan Tağlık, a Fullstack Web Developer. You can explore my
          personal website to see the projects I’m working on. I try my best to
          create things with ❤.
        </p>
        <div className="flex justify-center md:justify-start gap-x-5 mt-10">
          <Link
            href="https://instagram.com/furkantaglik"
            aria-label="Instagram Profile"
            className="p-2 border border-primary rounded-full transition-all hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <Instagram color="cyan" />
          </Link>
          <Link
            href="https://linkedin.com/in/furkantaglik/"
            aria-label="LinkedIn Profile"
            className="p-2 border border-primary rounded-full transition-all hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <Linkedin color="cyan" />
          </Link>
          <Link
            href="https://github.com/furkantaglik/"
            aria-label="GitHub Profile"
            className="p-2 border border-primary rounded-full transition-all hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <Github color="cyan" />
          </Link>
          <Link
            href="https://x.com/furkantaglik/"
            aria-label="Twitter (X) Profile"
            className="p-2 border border-primary rounded-full transition-all hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <X color="cyan" />
          </Link>
          <Link
            href="https://medium.com/@furkantaglik/"
            aria-label="Medium Profile"
            className="p-3 border border-primary rounded-full transition-all hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <FaMediumM color="cyan" />
          </Link>
        </div>
        <a
          href="/files/furkantaglikCV.pdf"
          download="furkantaglikCV.pdf"
          className="rounded mt-5 font-semibold inline-flex items-center bg-primary text-white p-3"
          aria-label="Download Furkan Tağlık CV"
        >
          Download CV
          <FileUser className="ms-2" size={20} />
        </a>
      </div>

      <div className="relative rounded-full mx-auto md:mx-0">
        <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-30"></div>
        <Image
          src={"/images/profile.png"}
          className="rounded-full relative"
          alt="Furkan Tağlık profile picture"
          quality={100}
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
