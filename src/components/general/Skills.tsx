import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaNodeJs,
  FaBootstrap,
  FaReact,
  FaAngular,
  FaLaravel,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";

export default function Skills() {
  return (
    <section className="">
      <h1 className="text-3xl font-semibold text-center  border-b-2 border-secondary pb-2">
        SKILLS
      </h1>
      <ul className="grid md:grid-cols-6 grid-cols-3 gap-x-5 mt-5 text-cyan font-semibold">
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <FaHtml5 size={50} color="cyan" />
          <label htmlFor="">HTML</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <FaCss3Alt size={50} color="cyan" />
          <label htmlFor="">CSS</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <IoLogoJavascript size={50} color="cyan" />
          <label htmlFor="">JS</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <SiTypescript size={50} color="cyan" />
          <label htmlFor="">TS</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <FaPhp size={50} color="cyan" />
          <label htmlFor="">PHP</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <FaNodeJs size={50} color="cyan" />
          <label htmlFor="">NODE</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <FaReact size={50} color="cyan" />
          <label htmlFor="">REACT</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <FaAngular size={50} color="cyan" />
          <label htmlFor="">ANGULAR</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <RiNextjsFill size={50} color="cyan" />
          <label htmlFor="">NEXT</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <FaLaravel size={50} color="cyan" />
          <label htmlFor="">LARAVEL</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <FaBootstrap size={50} color="cyan" />
          <label htmlFor="">BOOTSTRAP</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <RiTailwindCssFill size={50} color="cyan" />
          <label htmlFor="">TAİLWİND</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <BiLogoPostgresql size={50} color="cyan" />
          <label htmlFor="">POSTGRE</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <TbBrandMysql size={50} color="cyan" />
          <label htmlFor="">MYSQL</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <SiMongodb size={50} color="cyan" />
          <label htmlFor="">MONGO</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <IoLogoFirebase size={50} color="cyan" />
          <label htmlFor="">FİREBASE</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <RiSupabaseFill size={50} color="cyan" />
          <label htmlFor="">SUPABASE</label>
        </li>
        <li className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer">
          <SiPostman size={50} color="cyan" />
          <label htmlFor="">POSTMAN</label>
        </li>
      </ul>
    </section>
  );
}
