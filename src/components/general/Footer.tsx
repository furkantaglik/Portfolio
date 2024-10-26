import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t-2 border-secondary py-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-gray-300">
          © {new Date().getFullYear()} Furkan Tağlık. All Rights Reserved.
        </p>
        <div className="flex justify-center mt-2 gap-x-5 text-gray-300">
          <Link
            href="https://instagram.com/furkantaglik"
            className=" hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Furkan Tağlık Instagram profili"
          >
            Instagram
          </Link>
          <Link
            href="https://linkedin.com/in/furkantaglik"
            className=" hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Furkan Tağlık LinkedIn profili"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/furkantaglik"
            className=" hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Furkan Tağlık GitHub profili"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
