import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furkan Tağlık",
  description: "Kişisel web sitesi",
  alternates: {
    canonical: "https://www.furkantaglik.online",
  },
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
        <meta name="description" content="Kişisel web sitesi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Furkan Tağlık" />
        <meta property="og:description" content="Kişisel web sitesi" />
        <meta
          property="og:image"
          content="https://www.furkantaglik.online/images/socials.png"
        />
        <meta property="og:url" content="https://www.furkantaglik.online" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Furkan Tağlık" />
        <meta name="twitter:description" content="Kişisel web sitesi" />
        <meta
          name="twitter:image"
          content="https://www.furkantaglik.online/images/socials.png"
        />
      </head>
      <body className={roboto.className}>
        <main className="max-w-screen-xl mx-auto md:px-0 px-1">
          <Header />
          {children}
          <Footer />
        </main>

        <Script id="person-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Furkan Tağlık",
            url: "https://www.furkantaglik.online",
            sameAs: [
              "https://linkedin.com/in/furkantaglik",
              "https://github.com/furkantaglik",
              "https://medium.com/@furkantaglik",
              "https://stackoverflow.com/users/17726850/furkantaglik",
            ],
          })}
        </Script>
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Furkan Tağlık Kişisel Web Sitesi",
            url: "https://www.furkantaglik.online",
          })}
        </Script>
      </body>
    </html>
  );
}
