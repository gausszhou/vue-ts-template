import { reactive } from "vue";

export function usePager() {
  const pager = reactive({
    current: 0,
    size: 10,
    total: 0,
  });

  const callbacks: (() => void)[] = [];

  const onCurrentChange = (current: number) => {
    pager.current = current;
    callbacks.forEach((callback) => callback());
  };

  const onSizeChange = (size: number) => {
    pager.size = size;
    callbacks.forEach((callback) => callback());
  };

  const onAnyChange = (callback: () => void) => {
    callbacks.push(callback);
  };

  return {
    pager,
    onCurrentChange,
    onSizeChange,
    onAnyChange,
  };
}
