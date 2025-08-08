import { ref } from "vue";

export enum EnumDialogMode {
  CANCEL = "cancel",
  CONFIRM = "confirm",
}

export function useDialogVisible() {
  const visible = ref(false);
  const mode = ref(EnumDialogMode.CANCEL);

  const onCancel = () => {
    mode.value = EnumDialogMode.CANCEL;
    visible.value = false;
  };

  const onConfirm = () => {
    mode.value = EnumDialogMode.CONFIRM;
    visible.value = false;
  };

  return {
    visible,
    mode,
    onCancel,
    onConfirm,
  };
}
