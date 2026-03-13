export default function MoodSelector() {
  return (
    <div className="flex px-6 space-x-3 mb-6">
      <button className="flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-full bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors">
        <span className="text-[15px] font-semibold text-gray-800">Excited</span>
        <span className="text-base leading-none bg-[#e8e2fa] p-1 rounded-full w-7 h-7 flex items-center justify-center">👾</span>
      </button>
      <button className="flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-full bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors">
        <span className="text-[15px] font-semibold text-gray-800">Awful</span>
        <span className="text-base leading-none bg-[#e0efd5] p-1 rounded-full w-7 h-7 flex items-center justify-center">🤢</span>
      </button>
      <button className="flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-full bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors">
        <span className="text-[15px] font-semibold text-gray-800">Okay</span>
        <span className="text-base leading-none bg-[#fceadc] p-1 rounded-full w-7 h-7 flex items-center justify-center">😏</span>
      </button>
    </div>
  );
}
