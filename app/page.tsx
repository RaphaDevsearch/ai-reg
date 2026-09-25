import React from 'react';

export default function WireframeLayout() {
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col font-sans overflow-hidden">
      {/* Fixed Full-width Header Bar */}
      <header className="sticky top-0 z-10 w-full h-16 shrink-0 border-b-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 font-semibold uppercase tracking-wider bg-white px-6">
        Header Bar
      </header>

      {/* Scrollable Main Container below the fixed header */}
      <main className="w-full flex-1 p-6 flex gap-6 overflow-y-auto">
        {/* 3-Column Main Group */}
        <div className="flex-1 grid grid-cols-[1fr_2fr_1fr] gap-6 min-h-[700px]">
          {/* Left Column (~22% width) */}
          <div className="sticky top-6 h-[calc(100vh-7rem)]">
            <div className="w-full h-full border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 font-semibold bg-white">
              Box A (Left)
            </div>
          </div>

          {/* Middle Column (~44% width) */}
          <div className="h-full flex flex-col gap-6">
            {/* Top Box (~80% height) */}
            <div className="h-[80%] border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 font-semibold bg-white">
              Box B (Middle Top)
            </div>
            {/* Bottom Box (~20% height) */}
            <div className="h-[20%] border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 font-semibold bg-white">
              Box C (Middle Bottom)
            </div>
          </div>

          {/* Right Column (~22% width) */}
          <div className="sticky top-6 h-[calc(100vh-7rem)]">
            <div className="w-full h-full border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 font-semibold bg-white">
              Box D (Right)
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}