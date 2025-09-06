import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./globals.css";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Cleomitra - Customer Experience Platform",
  description:
    "The Customer Experience Platform You Need, To Turn Your Business Into A Big Name.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url(&#39;https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap&#39;);
        </style>
      </head>
      <body className={`${lato.variable} antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
