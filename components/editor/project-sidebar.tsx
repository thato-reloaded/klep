"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-[320px] max-w-full overflow-hidden bg-surface shadow-2xl shadow-black/40 transition-transform duration-300 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
      )}
    >
      <div className="flex h-full flex-col border-r border-default">
        <div className="flex items-center justify-between border-b border-default px-5 py-4">
          <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
          <Button variant="ghost" size="sm" type="button" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <Tabs defaultValue="my-projects" className="space-y-4">
            <TabsList>
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>

            <TabsContent value="my-projects">
              <div className="rounded-3xl border border-default bg-base/70 p-8 text-center">
                <p className="text-sm text-copy-secondary">
                  No projects yet. Add a new project to get started.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="shared">
              <div className="rounded-3xl border border-default bg-base/70 p-8 text-center">
                <p className="text-sm text-copy-secondary">No shared projects yet.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-default p-5">
          <Button className="w-full justify-center gap-2" variant="secondary">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </aside>
  );
}
