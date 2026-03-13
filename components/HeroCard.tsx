import { Play } from "lucide-react";

export default function HeroCard() {
  return (
    <div className="mx-6 mb-4 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#714efe] to-[#997cff] p-7 shadow-lg">
      <div className="relative z-10 w-2/3">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">I'm Finn.</h2>
        <p className="text-white/80 text-[15px] leading-snug mb-5 font-medium pr-4">
          Let's get started with a quick mood check.
        </p>
        <button className="flex items-center space-x-2 bg-white text-[#714efe] px-4 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:bg-gray-50 transition-colors">
          <span>Check in</span>
          <Play fill="currentColor" className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* CSS representation of "Finn" the blob */}
      <div className="absolute right-[-20px] -bottom-4 w-44 h-44 z-0 flex flex-col pt-12 items-center">
        {/* Glow behind Finn */}
        <div className="absolute top-10 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
        
        {/* Finn Body */}
        <div className="relative w-28 h-[120px] bg-gradient-to-b from-[#a3b2f8] via-[#8fa3f8] to-[#714efe] rounded-t-full shadow-inner flex flex-col items-center pt-8">
          {/* Eyes */}
          <div className="flex space-x-5 mb-2 relative z-10">
            <div className="w-3.5 h-3.5 bg-gray-900 rounded-full shadow-sm"></div>
            <div className="w-3.5 h-3.5 bg-gray-900 rounded-full shadow-sm"></div>
          </div>
          {/* Smile */}
          <div className="w-5 h-2.5 border-b-[3px] border-gray-900 rounded-b-full relative z-10"></div>
        </div>
        <div className="relative w-40 h-[60px] -mt-10 bg-gradient-to-b from-[#8fa3f8] to-[#714efe] rounded-full blur-[1px]"></div>
      </div>
    </div>
  );
}
