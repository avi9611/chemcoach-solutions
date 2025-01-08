import { ReactNode } from "react";
import { Tenor_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Transition from "@/components/Transition";
import StairTransition from "@/components/StairTransition";

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ysabeau",
});

export const metadata = {
  title: "Chemcoach Solutions",
  description: "Chemcoach Solutions brings unparalleled expertise and a global perspective to advancing chemistry education and research.",
  icons:{
    icon:[
      {
        url:'/images/file.png',
        href:'/images/file.png'
      },
    ],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={tenor.variable}>
        <Header />
        <StairTransition />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
