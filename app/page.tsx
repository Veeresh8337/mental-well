import Header from "@/components/Header";
import MoodSelector from "@/components/MoodSelector";
import HeroCard from "@/components/HeroCard";
import AICard from "@/components/AICard";
import EnergySection from "@/components/EnergySection";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
    <div className="pb-24">
      <Header />
      
      <div className="px-6 mb-5">
        <h1 className="text-[1.65rem] text-gray-900 font-medium leading-tight">
          Hi Melinda,
        </h1>
        <p className="text-[1.65rem] text-gray-500 font-light mt-0.5 tracking-tight leading-tight">
          How are you feeling today?
        </p>
      </div>

      <MoodSelector />
      <HeroCard />
      <AICard />
      <EnergySection />
      
      <BottomNav />
    </div>
    </>
  );
}
