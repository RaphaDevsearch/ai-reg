import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TestPanel() {
  return (
    <Card className="h-full flex flex-col justify-center">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">4. Test It</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <Input placeholder="x = 10" defaultValue="x = 10" className="font-mono text-sm" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Predict</Button>
          <Badge className="h-10 px-4 text-sm font-mono bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-300">
            y ≈ 18.2
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}