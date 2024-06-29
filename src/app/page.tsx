
import HeroSection from "../../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full max-w-7xl">
       <HeroSection />
      </div>
    </main>
  );
}
