import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="Kişisel web sitesi"></meta>

        <meta property="og:title" content="Furkan Tağlık" />
        <meta property="og:description" content="Kişisel web sitesi" />
        <meta
          property="og:image"
          content="https://www.furkantaglik.online/images/socials.png"
        />
        <meta property="og:url" content="https://www.furkantaglik.online" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Furkan Tağlık" />
        <meta name="twitter:description" content="Kişisel web sitesi" />
        <meta
          name="twitter:image"
          content="https://www.furkantaglik.online/images/socials.png"
        ></meta>
      </head>
      <body className={roboto.className}>
        <main className="max-w-screen-xl mx-auto  md:px-0 px-1">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
