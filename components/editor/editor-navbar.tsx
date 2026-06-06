"use client";

import { Button } from "@/components/ui/button";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({ isSidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-subtle bg-surface/95 px-4 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          type="button"
          onClick={onToggleSidebar}
          className="h-10 w-10 rounded-xl p-0"
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle projects sidebar</span>
        </Button>
      </div>

      <div className="flex-1 text-center text-sm font-medium text-copy-secondary">
        {/* Center section reserved for future editor controls */}
      </div>

      <div className="w-10" />
    </header>
  );
}
