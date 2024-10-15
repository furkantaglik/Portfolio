"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
  blogs,
  projects,
}: {
  children: React.ReactNode;
  projects: React.ReactNode;
  blogs: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <section className="flex justify-center items-center md:mt-10 mt-5 gap-x-5 font-semibold border-b w-fit mx-auto p-1">
      <Link
        href="/dashboard/projects"
        className={`underline ${
          pathname === "/dashboard/projects" ? "text-accent" : ""
        }  `}
      >
        Projects
      </Link>
      |
      <Link
        href="/dashboard/blogs"
        className={`underline ${
          pathname === "/dashboard/blogs" ? "text-accent" : ""
        }  `}
      >
        Blogs
      </Link>
    </section>
  );
}
