import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "swiper/css";
import "swiper/css/navigation";

const optima = localFont({
  src: "../assets/fonts/OptimaLTPro-Medium.otf",
  variable: "--font-optima",
});

const EduAUVI = localFont({
  src: "../assets/fonts/EduAUVICWANTArrows-VariableFont_wght.ttf",
  variable: "--font-edu-auvi",
});

export const metadata: Metadata = {
  title: "Bliz Services | Educational and Proffessional Consultancy",
  description: "Do you want to work Overseas? Study Overseas, ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${optima.variable} ${EduAUVI.variable}  antialiased w-[100vw] overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
