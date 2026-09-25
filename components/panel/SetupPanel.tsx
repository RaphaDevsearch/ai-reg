"use-client"
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

export default function SetupPanel() {
//   const [degree, setDegree] = useState([1]);

  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">1. Setup</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-5 text-sm">
        {/* Dataset Selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Dataset</label>
          <Select defaultValue="ad-spend">
            <SelectTrigger>
              <SelectValue placeholder="Select dataset" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ad-spend">Ad spend vs Sales (7 points)</SelectItem>
              <SelectItem value="housing">House Size vs Price (15 points)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Model Type */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Model Type</label>
          <Tabs defaultValue="linear" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="linear">Linear</TabsTrigger>
              <TabsTrigger value="poly">Poly</TabsTrigger>
              <TabsTrigger value="exp">Expo</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Polynomial Degree Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="font-medium text-muted-foreground">Degree</span>
            {/* <span className="font-mono font-bold">{degree[0]}</span> */}
          </div>
          <Slider
            // value={degree}
            // onValueChange={setDegree}
            min={1}
            max={6}
            step={1}
          />
        </div>

        {/* Primary Fit Action */}
        <Button className="w-full gap-2 mt-auto bg-emerald-600 hover:bg-emerald-700 text-white">
          <Play className="h-4 w-4 fill-current" />
          Fit Line
        </Button>

        {/* Dynamic Tip Box */}
        <div className="rounded-lg bg-muted p-3 text-xs text-muted-foreground flex gap-2">
          <Info className="h-4 w-4 shrink-0 text-sky-500 mt-0.5" />
          <span>Increasing polynomial degree allows fitting complex curves, but higher degrees risk overfitting.</span>
        </div>
      </CardContent>
    </Card>
  );
}