import React from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-16 shrink-0 border-b bg-background px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <div className="h-6 w-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-mono text-xs">
            LR
          </div>
          <span>AI Sim Lab</span>
        </div>

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground">
          <Button variant="ghost" className="text-foreground">Simulate</Button>
          <Button variant="ghost">Datasets</Button>
          <Button variant="ghost">Models</Button>
          <Button variant="ghost">Learn</Button>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-4 w-4" />
          <span className="sr-only">Help</span>
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <User className="h-4 w-4" />
          <span>JD</span>
        </Button>
      </div>
    </header>
  );
}