"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase.config";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [pending, setPending] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const desiredUserId = process.env.NEXT_PUBLIC_ADMIN_ID;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.uid === desiredUserId) {
          setPending(false);
        } else {
          router.push("/");
        }
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router, desiredUserId]);

  if (pending) {
    return <div>Loading...</div>;
  }

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
