import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero/>
    </main>
  );
}