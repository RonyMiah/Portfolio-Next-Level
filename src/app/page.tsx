import { FaBlogger, FaHome } from "react-icons/fa";
import HeroSection from "../../components/HeroSection/HeroSection";
import { FloatingNav } from "../../components/ui/FloatingNav";
import CopyEmailSection from "../../components/ui/CopyEmailSection";
import Project from "../../components/ui/Project";
import { FcAbout } from "react-icons/fc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/", icon: <FaHome /> },
    { name: "About", link: "/#about", icon: <FcAbout /> },
    {
      name: "Project",
      link: "/#project",
      icon: <AiOutlineFundProjectionScreen />,
    },
    { name: "Blog", link: "/#blog", icon: <FaBlogger /> },
    { name: "Contact", link: "/#contact", icon: <MdContactPhone /> },
  ];

  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <HeroSection />
        {/* <CopyEmailSection /> */}
        <Project />
      </div>
    </main>
  );
}
