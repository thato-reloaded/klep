"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Plus, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectItem {
  id: string;
  name: string;
  owner: "owned" | "shared";
}

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectItem[];
  onCreateProject: () => void;
  onRenameProject: (projectId: string, projectName: string) => void;
  onDeleteProject: (projectId: string, projectName: string) => void;
}

export function ProjectSidebar({
  isOpen,
  onClose,
  projects,
  onCreateProject,
  onRenameProject,
  onDeleteProject,
}: ProjectSidebarProps) {
  const ownedProjects = projects.filter((project) => project.owner === "owned");
  const sharedProjects = projects.filter((project) => project.owner === "shared");

  return (
    <>
      {isOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-base/70 backdrop-blur-sm md:hidden"
          onClick={onClose}
          aria-label="Close projects sidebar"
        />
      ) : null}

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

              <TabsContent value="my-projects" className="space-y-3">
                {ownedProjects.length > 0 ? (
                  ownedProjects.map((project) => (
                    <div
                      key={project.id}
                      className="group flex items-center justify-between rounded-2xl border border-default bg-base/70 px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-copy-primary">{project.name}</p>
                        <p className="text-xs text-copy-secondary">Owned by you</p>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <Button
                          variant="ghost"
                          size="sm"
                          type="button"
                          onClick={() => onRenameProject(project.id, project.name)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          type="button"
                          onClick={() => onDeleteProject(project.id, project.name)}
                          className="text-error"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-3xl border border-default bg-base/70 p-8 text-center">
                    <p className="text-sm text-copy-secondary">
                      No projects yet. Add a new project to get started.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="shared" className="space-y-3">
                {sharedProjects.length > 0 ? (
                  sharedProjects.map((project) => (
                    <div
                      key={project.id}
                      className="rounded-2xl border border-default bg-base/70 px-4 py-3"
                    >
                      <p className="text-sm font-medium text-copy-primary">{project.name}</p>
                      <p className="text-xs text-copy-secondary">Shared with you</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-3xl border border-default bg-base/70 p-8 text-center">
                    <p className="text-sm text-copy-secondary">No shared projects yet.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          <div className="border-t border-default p-5">
            <Button className="w-full justify-center gap-2 bg-[#6457f9] text-white hover:bg-[#5a4fe6]" variant="secondary" onClick={onCreateProject}>
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
