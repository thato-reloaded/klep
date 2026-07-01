import { useCallback, useState } from "react";

export type ProjectDialogType = "create" | "rename" | "delete" | null;

export interface ProjectDialogState {
  type: ProjectDialogType;
  projectId: string | null;
  projectName: string;
}

const emptyDialogState: ProjectDialogState = {
  type: null,
  projectId: null,
  projectName: "",
};

export function useProjectDialogs() {
  const [dialogState, setDialogState] = useState<ProjectDialogState>(emptyDialogState);
  const [formValue, setFormValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openCreate = useCallback(() => {
    setDialogState({ type: "create", projectId: null, projectName: "" });
    setFormValue("");
  }, []);

  const openRename = useCallback((projectId: string, projectName: string) => {
    setDialogState({ type: "rename", projectId, projectName });
    setFormValue(projectName);
  }, []);

  const openDelete = useCallback((projectId: string, projectName: string) => {
    setDialogState({ type: "delete", projectId, projectName });
    setFormValue("");
  }, []);

  const closeDialog = useCallback(() => {
    setDialogState(emptyDialogState);
    setFormValue("");
    setIsLoading(false);
  }, []);

  const submit = useCallback(async (action: () => boolean | void | Promise<boolean | void>) => {
    setIsLoading(true);

    try {
      const shouldClose = await action();
      if (shouldClose !== false) {
        closeDialog();
      }
    } finally {
      setIsLoading(false);
    }
  }, [closeDialog]);

  return {
    dialogState,
    formValue,
    isLoading,
    openCreate,
    openRename,
    openDelete,
    closeDialog,
    setFormValue,
    submit,
  };
}
