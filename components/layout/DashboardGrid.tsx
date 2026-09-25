import React from 'react';

interface DashboardGridProps {
  left: React.ReactNode;
  middleTop: React.ReactNode;
  middleBottom: React.ReactNode;
  right: React.ReactNode;
}

export default function DashboardGrid({ left, middleTop, middleBottom, right }: DashboardGridProps) {
  return (
    <main className="w-full flex-1 p-6 flex gap-6 overflow-hidden">
      <div className="flex-1 grid grid-cols-[1fr_2fr_1fr] gap-6 h-full">
        <div className="h-full">{left}</div>

        <div className="h-full flex flex-col gap-6 overflow-hidden">
          <div className="h-[80%] overflow-y-auto">{middleTop}</div>
          <div className="h-[20%] shrink-0">{middleBottom}</div>
        </div>

        <div className="h-full">{right}</div>
      </div>
    </main>
  );
}