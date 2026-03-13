import { Home, ClipboardList, Brain, BarChart2, User } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[420px] z-50">
      <div className="bg-[#e4e1e6]/90 backdrop-blur-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] rounded-[2.5rem] p-2 flex items-center justify-between border border-white/40">
        {/* 1. Home */}
        <button className="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-[1.25rem] text-[#7a5af8] hover:bg-black/5 transition-colors">
          <Home className="w-[1.6rem] h-[1.6rem]" strokeWidth={2.5} />
        </button>
        
        {/* 2. Assessment */}
        <button className="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-[1.25rem] text-gray-400 hover:text-gray-900 hover:bg-black/5 transition-colors">
          <ClipboardList className="w-[1.6rem] h-[1.6rem]" strokeWidth={2.5} />
        </button>

        {/* 3. Finn AI (Middle, Highlighted) */}
        <button className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#8fa3f8] to-[#714efe] text-white shadow-lg transition-transform active:scale-95 border-2 border-[#e4e1e6]/90 relative -top-3">
          <Brain className="w-6 h-6" strokeWidth={2.5} />
        </button>

        {/* 4. Analysis */}
        <button className="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-[1.25rem] text-gray-400 hover:text-gray-900 hover:bg-black/5 transition-colors">
          <BarChart2 className="w-[1.6rem] h-[1.6rem]" strokeWidth={2.5} />
        </button>

        {/* 5. Profile */}
        <button className="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-[1.25rem] text-gray-400 hover:text-gray-900 hover:bg-black/5 transition-colors">
          <User className="w-[1.6rem] h-[1.6rem]" strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  );
}
