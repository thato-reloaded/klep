"use client";

import { useEffect, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ProjectDialogProps {
  open: boolean;
  type: "create" | "rename" | "delete" | null;
  projectName: string;
  formValue: string;
  isLoading: boolean;
  onClose: () => void;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const slugify = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "project";

export function ProjectDialogs({
  open,
  type,
  projectName,
  formValue,
  isLoading,
  onClose,
  onChange,
  onSubmit,
}: ProjectDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isCreate = type === "create";
  const isRename = type === "rename";
  const isDelete = type === "delete";
  const slugPreview = useMemo(() => slugify(formValue || projectName), [formValue, projectName]);

  useEffect(() => {
    if (open && (isRename || isCreate)) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [open, isCreate, isRename]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>
            {isCreate ? "Create project" : isRename ? "Rename project" : <span className="font-semibold text-error">Delete project</span>}
          </DialogTitle>
          <DialogDescription>
            {isCreate && "Give your project a name to start the workspace."}
            {isRename && `Rename “${projectName}” to something new.`}
            {isDelete && `This will remove “${projectName}” from the mock project list.`}
          </DialogDescription>
        </DialogHeader>

        {isDelete ? (
          <div className="mt-4 rounded-2xl border border-default bg-base/70 p-4 text-sm text-copy-secondary">
            This action cannot be undone.
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <label htmlFor="project-name" className="text-sm font-medium text-copy-primary">
                {isCreate ? "Project name" : "New project name"}
              </label>
              <Input
                ref={inputRef}
                id="project-name"
                value={formValue}
                onChange={(event) => onChange(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isCreate ? "My new project" : "Project name"}
              />
            </div>

            {isCreate && (
              <div className="rounded-2xl border border-default bg-base/70 p-3 text-sm text-copy-secondary">
                <p className="text-copy-primary">Slug preview</p>
                <p className="mt-1 font-mono text-brand">/{slugPreview}</p>
              </div>
            )}
          </div>
        )}

        <DialogFooter>
          <Button variant="secondary" type="button" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          {isDelete ? (
            <Button
              variant="default"
              type="button"
              className={cn("bg-[#ffefef] text-error hover:bg-[#ffe0e0]", isLoading && "opacity-70")}
              onClick={onSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Deleting…" : "Delete project"}
            </Button>
          ) : (
            <Button type="button" onClick={onSubmit} disabled={isLoading}>
              {isLoading ? "Saving…" : isCreate ? "Create project" : "Rename project"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
