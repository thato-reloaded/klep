"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-base text-copy-primary">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
      />

      <ProjectSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Card className="min-h-[calc(100vh-4rem)]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-brand" />
              <CardTitle>Klep AI Editor</CardTitle>
            </div>
            <CardDescription>Editor chrome and project sidebar shell for future workflows.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-copy-secondary">
              <p>Use the panel button to show or hide the floating project sidebar.</p>
              <p>The sidebar slides in above the canvas without pushing content.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
