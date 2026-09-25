import React from 'react';

export default function WireframeLayout() {
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col font-sans overflow-hidden">
      {/* Fixed Full-width Header Bar */}
      <header className="w-full h-16 shrink-0 border-b-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 font-semibold uppercase tracking-wider bg-white px-6">
        Header Bar
      </header>

      {/* Main Container - No overflow/scroll */}
      <main className="w-full flex-1 p-6 flex gap-6 overflow-hidden">
        {/* 3-Column Main Group */}
        <div className="flex-1 grid grid-cols-[1fr_2fr_1fr] gap-6 h-full">
          {/* Left Column (Fixed / No Scroll) */}
          <div className="h-full">
            <div className="w-full h-full border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 font-semibold bg-white">
              Box A (Left)
            </div>
          </div>

          {/* Middle Column */}
          <div className="h-full flex flex-col gap-6 overflow-hidden">
            {/* Top Box (~80% height) - ONLY THIS BOX SCROLLS */}
            <div className="h-[80%] border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 font-semibold bg-white overflow-y-auto">
              Box B (Middle Top - Scrollable)
            </div>
            {/* Bottom Box (~20% height - Fixed / No Scroll) */}
            <div className="h-[20%] border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 font-semibold bg-white shrink-0">
              Box C (Middle Bottom)
            </div>
          </div>

          {/* Right Column (Fixed / No Scroll) */}
          <div className="h-full">
            <div className="w-full h-full border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 font-semibold bg-white">
              Box D (Right)
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}