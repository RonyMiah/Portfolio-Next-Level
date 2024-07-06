"use client";

import { FaBlogger, FaHome } from "react-icons/fa";
import HeroSection from "../../components/HeroSection/HeroSection";
import { FloatingNav } from "../../components/ui/FloatingNav";
import Project from "../../components/ui/Project";
import { FcAbout } from "react-icons/fc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import Footer from "../../components/ui/Footer";
import About from "../../components/ui/About";
import { Skills } from "../../components/ui/Skills";
import { Youtube } from "../../components/ui/Youtube";
import ContactForm from "../../components/ui/ContactForm";
import Experience from "../../components/ui/Exprience";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/", icon: <FaHome /> },
    { name: "About", link: "/#about", icon: <FcAbout /> },
    {
      name: "Project",
      link: "/#project",
      icon: <AiOutlineFundProjectionScreen />,
    },
    { name: "Blog", link: "/blog", icon: <FaBlogger /> },
    { name: "Contact", link: "/#contact", icon: <MdContactPhone /> },
  ];

  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <HeroSection />
        <About />
        {/* <CopyEmailSection /> */}
        <Project />
        <Skills />
        <Experience />
        <Youtube />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
