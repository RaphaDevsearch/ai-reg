import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WatchPanel() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-base font-semibold">2. Watch It Fit</CardTitle>
        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
          Fitted
        </Badge>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-y-auto flex flex-col justify-between pt-2">
        {/* Scatter Plot & Curve Area */}
        <div className="w-full h-56 bg-muted/40 rounded-lg border flex items-center justify-center relative p-4">
          <svg className="w-full h-full" viewBox="0 0 300 150">
            {/* Grid lines */}
            <line x1="0" y1="130" x2="300" y2="130" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="20" y1="0" x2="20" y2="150" stroke="#e2e8f0" strokeWidth="1" />
            
            {/* Fitted Regression Line */}
            <line x1="30" y1="120" x2="280" y2="30" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="0" />
            
            {/* Scatter Points */}
            {[
              [40, 115], [70, 100], [110, 85], [150, 70], 
              [190, 50], [220, 45], [260, 25]
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="4" className="fill-emerald-500 stroke-background stroke-2" />
            ))}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground pt-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block" />
            <span>Data points (x, y)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-4 bg-blue-600 inline-block" />
            <span>Fitted curve</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}