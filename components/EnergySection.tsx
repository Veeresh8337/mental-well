import { Zap, CalendarDays } from "lucide-react";

export default function EnergySection() {
  return (
    <div className="mx-6 mb-24 rounded-[2.5rem] bg-[#f9f9fb] p-6 shadow-sm">
      {/* Top part: Trend */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-gray-800 font-medium mb-1">
            This week's energy trend:
          </p>
          <h2 className="text-[2.5rem] leading-none font-semibold text-gray-900 tracking-tight flex items-center">
            Steady <span className="ml-2">💪</span>
          </h2>
        </div>
        
        {/* Lightning Bolt Icon */}
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#e6ddfa]">
          <Zap className="h-6 w-6 text-gray-900" strokeWidth={2.5} fill="currentColor" />
        </div>
      </div>

      {/* Bottom part: Activity Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Card: Emotional */}
        <div className="rounded-[2rem] bg-[#dcedd2] p-5 aspect-square flex flex-col justify-between relative overflow-hidden">
          {/* Gradient Overlay for Top Left Gloss */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-60"></div>
          
          <div className="relative z-10 w-12 h-12 rounded-[1.25rem] bg-white/70 flex items-center justify-center shadow-sm">
            <span className="text-xl leading-none">😌</span>
          </div>
          
          <div className="relative z-10">
            <h3 className="font-semibold text-gray-900 mb-1">Emotional...</h3>
            <p className="text-[13px] text-gray-700 leading-snug pr-2">
              You checked in 5 times this week.
            </p>
          </div>
        </div>

        {/* Right Card: Calendar */}
        <div className="rounded-[2rem] bg-[#ded5ef] p-5 aspect-square flex flex-col justify-between relative overflow-hidden">
          {/* Gradient Overlay for Top Left Gloss */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-60"></div>
          
          <div className="relative z-10 w-12 h-12 rounded-[1.25rem] bg-white/70 flex items-center justify-center shadow-sm">
            <CalendarDays className="h-6 w-6 text-gray-800" strokeWidth={2} />
          </div>
          
          <div className="relative z-10">
            <h3 className="font-semibold text-gray-900 mb-1">Activities</h3>
            <p className="text-[13px] text-gray-700 leading-snug">
              Completed 3 guided sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
