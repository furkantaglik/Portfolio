"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <section className="md:mt-10 mt-5">
      <nav className="flex justify-center gap-x-5 font-semibold border-b pb-1 w-fit items-center mx-auto">
        <Link
          href="/dashboard/projects"
          className={`${
            pathname === "/dashboard/projects" ? "text-accent font-bold" : ""
          }`}
        >
          Projects
        </Link>
        <span>|</span>
        <Link
          href="/dashboard/blogs"
          className={`${
            pathname === "/dashboard/blogs" ? "text-accent font-bold" : ""
          }`}
        >
          Blogs
        </Link>
      </nav>
      <main>{children}</main>
    </section>
  );
}
