import React from "react";
import Image from "next/image";
import { FileUser, Github, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="flex flex-col-reverse  md:flex-row justify-between mt-32 max-w-screen-lg gap-y-20 md:gap-x-10 mx-auto px-5">
      <div className="text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Hello It's Me
        </h3>
        <h1 className="text-3xl md:text-4xl font-extrabold">Furkan Tağlık</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-5">
          And I'm a{" "}
          <span className="text-primary ">Fullstack Web Developer</span>
        </h2>
        <p>
          Hey, I'm Furkan Tağlık. Here, you can check out what I'm working on. I
          try my best to create things with ❤
        </p>
        <ul className="flex justify-center md:justify-start gap-x-5 mt-10">
          <Link
            href="https://instagram.com/furkantaglik"
            className="p-2 border border-primary rounded-full transition-all hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <Instagram color="cyan" />
          </Link>
          <Link
            href="https://linkedin.com/in/furkantaglik/"
            className="p-2 border border-primary rounded-full transition-all hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <Linkedin color="cyan" />
          </Link>
          <Link
            href="https://github.com/furkantaglik/"
            className="p-2 border border-primary rounded-full transition-all hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <Github color="cyan" />
          </Link>
          <Link
            href="https://x.com/furkantaglik/"
            className="p-2 border border-primary rounded-full transition-all hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <X color="cyan" />
          </Link>
        </ul>
        <a
          href="/files/furkantaglikCV.pdf"
          download="furkantaglikCV.pdf"
          className="rounded mt-5 font-semibold inline-flex items-center bg-primary text-white p-3"
        >
          Download CV
          <FileUser className="ms-2" size={20} />
        </a>
      </div>

      <div className="relative rounded-full mx-auto md:mx-0">
        <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-50"></div>
        <Image
          src={"/images/profile.jpg"}
          className="rounded-full relative"
          alt="My picture"
          quality={100}
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
