import Header from '@/components/layout/Header';
import DashboardGrid from '@/components/layout/DashboardGrid';

function PlaceholderBox({ label }: { label: string }) {
  return (
    <div className="w-full h-full border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500 font-semibold bg-white">
      {label}
    </div>
  );
}

export default function WireframeLayout() {
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col font-sans overflow-hidden">
      {/* Fixed Full-width Header Bar */}
      
      <Header/>

      {/* Main Container - No overflow/scroll */}
      <DashboardGrid
        left={<PlaceholderBox label="Box A (Setup)" />}
        middleTop={<PlaceholderBox label="Box B (Watch it fit)" />}
        middleBottom={<PlaceholderBox label="Box C (Test it)" />}
        right={<PlaceholderBox label="Box D (Results)" />}
      />
    </div>
  );
}