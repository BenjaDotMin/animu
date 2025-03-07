import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {ViewTransitions} from 'next-view-transitions';
import "./globals.css";

export const metadata: Metadata = {
  title: "Animu",
  description: "Find Anime or Manga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body>
        <Header></Header>
        {children}       
        <Footer></Footer> 
      </body>
    </html>
    </ViewTransitions>
  );
}
