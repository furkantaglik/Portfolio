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
import { SiMongodb, SiPostman } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";

const skillsData = [
  { icon: <FaHtml5 size={50} color="cyan" />, label: "HTML" },
  { icon: <FaCss3Alt size={50} color="cyan" />, label: "CSS" },
  { icon: <IoLogoJavascript size={50} color="cyan" />, label: "JS" },
  { icon: <SiTypescript size={50} color="cyan" />, label: "TS" },
  { icon: <FaPhp size={50} color="cyan" />, label: "PHP" },
  { icon: <FaNodeJs size={50} color="cyan" />, label: "NODE" },
  { icon: <FaReact size={50} color="cyan" />, label: "REACT" },
  { icon: <FaAngular size={50} color="cyan" />, label: "ANGULAR" },
  { icon: <RiNextjsFill size={50} color="cyan" />, label: "NEXT" },
  { icon: <FaLaravel size={50} color="cyan" />, label: "LARAVEL" },
  { icon: <FaBootstrap size={50} color="cyan" />, label: "BOOTSTRAP" },
  { icon: <RiTailwindCssFill size={50} color="cyan" />, label: "TAILWIND" },
  { icon: <BiLogoPostgresql size={50} color="cyan" />, label: "POSTGRE" },
  { icon: <TbBrandMysql size={50} color="cyan" />, label: "MYSQL" },
  { icon: <SiMongodb size={50} color="cyan" />, label: "MONGO" },
  { icon: <IoLogoFirebase size={50} color="cyan" />, label: "FIREBASE" },
  { icon: <RiSupabaseFill size={50} color="cyan" />, label: "SUPABASE" },
  { icon: <SiPostman size={50} color="cyan" />, label: "POSTMAN" },
];

export default function Skills() {
  return (
    <section id="skills">
      <h1 className="text-3xl font-semibold text-center border-b-2 border-secondary pb-2">
        SKILLS
      </h1>
      <ul className="grid md:grid-cols-6 grid-cols-3 gap-x-5 mt-5 text-cyan font-semibold">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="flex flex-col items-center rounded border p-1 hover:bg-secondary transition-all cursor-pointer"
          >
            {skill.icon}
            <label>{skill.label}</label>
          </li>
        ))}
      </ul>
    </section>
  );
}
