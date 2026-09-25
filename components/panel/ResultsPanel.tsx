import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResultsPanel() {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">3. Results</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border bg-emerald-50/50 p-3 text-center border-emerald-200">
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">R² Score</div>
            <div className="text-xl font-bold text-emerald-700 font-mono mt-0.5">0.94</div>
          </div>
          <div className="rounded-lg border bg-amber-50/50 p-3 text-center border-amber-200">
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">MSE</div>
            <div className="text-xl font-bold text-amber-700 font-mono mt-0.5">1.80</div>
          </div>
        </div>

        {/* Residuals Bar Chart Placeholder */}
        <div className="flex-1 border rounded-lg p-3 flex flex-col">
          <span className="text-xs font-medium text-muted-foreground mb-2">Residuals per Data Point</span>
          <div className="flex-1 flex items-end gap-2 justify-between px-2 pt-2">
            {[40, -20, 30, -10, 50, -30, 15].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className={`w-full rounded-sm ${val > 0 ? 'bg-blue-500' : 'bg-amber-500'}`}
                  style={{ height: `${Math.abs(val)}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Export Button */}
        <Button variant="outline" className="w-full gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </CardContent>
    </Card>
  );
}