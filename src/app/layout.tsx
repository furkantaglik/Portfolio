import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/general/Header";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furkan Tağlık",
  description: "Kişisel web sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-screen-xl mx-auto  md:px-0 px-1">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
