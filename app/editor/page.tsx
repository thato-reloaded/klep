"use client";

import { useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectDialogs } from "@/components/editor/project-dialogs";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import { Button } from "@/components/ui/button";
import { useProjectDialogs } from "@/lib/hooks/use-project-dialogs";

interface ProjectItem {
  id: string;
  name: string;
  owner: "owned" | "shared";
}

const initialProjects: ProjectItem[] = [
  { id: "project-1", name: "Aurora Workspace", owner: "owned" },
  { id: "project-2", name: "Northstar Launch", owner: "owned" },
  { id: "project-3", name: "Studio Sync", owner: "shared" },
];

export default function EditorPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjects);
  const {
    dialogState,
    formValue,
    isLoading,
    openCreate,
    openRename,
    openDelete,
    closeDialog,
    setFormValue,
    submit,
  } = useProjectDialogs();

  const handleCreateSubmit = () =>
    submit(() => {
      const nextName = formValue.trim();

      if (!nextName) {
        return false;
      }

      setProjects((currentProjects) => [
        ...currentProjects,
        { id: `project-${Date.now()}`, name: nextName, owner: "owned" },
      ]);

      return true;
    });

  const handleRenameSubmit = () =>
    submit(() => {
      const nextName = formValue.trim();

      if (!dialogState.projectId || !nextName) {
        return false;
      }

      setProjects((currentProjects) =>
        currentProjects.map((project) =>
          project.id === dialogState.projectId ? { ...project, name: nextName } : project
        )
      );

      return true;
    });

  const handleDeleteSubmit = () =>
    submit(() => {
      if (!dialogState.projectId) {
        return false;
      }

      setProjects((currentProjects) =>
        currentProjects.filter((project) => project.id !== dialogState.projectId)
      );

      return true;
    });

  const currentProject = projects.find((project) => project.id === dialogState.projectId) ?? null;

  return (
    <main className="relative min-h-screen bg-base text-copy-primary">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
      />

      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        projects={projects}
        onCreateProject={() => {
          openCreate();
          setIsSidebarOpen(false);
        }}
        onRenameProject={(projectId, projectName) => {
          openRename(projectId, projectName);
          setIsSidebarOpen(false);
        }}
        onDeleteProject={(projectId, projectName) => {
          openDelete(projectId, projectName);
          setIsSidebarOpen(false);
        }}
      />

      <ProjectDialogs
        open={dialogState.type !== null}
        type={dialogState.type}
        projectName={currentProject?.name ?? dialogState.projectName}
        formValue={formValue}
        isLoading={isLoading}
        onClose={closeDialog}
        onChange={setFormValue}
        onSubmit={() => {
          if (dialogState.type === "create") {
            handleCreateSubmit();
          }

          if (dialogState.type === "rename") {
            handleRenameSubmit();
          }

          if (dialogState.type === "delete") {
            handleDeleteSubmit();
          }
        }}
      />

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center justify-center px-6 py-10">
        <div className="max-w-xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-default bg-surface">
              <Sparkles className="h-6 w-6 text-brand" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-copy-primary">
            Create a project or open an existing one
          </h1>
          <p className="mt-3 text-base leading-7 text-copy-secondary">
            Start a new architecture workspace, or choose a project from the sidebar.
          </p>
          <Button className="mt-6 justify-center gap-2 bg-[#6457f9] text-white hover:bg-[#5a4fe6]" onClick={openCreate}>
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </section>
    </main>
  );
}
