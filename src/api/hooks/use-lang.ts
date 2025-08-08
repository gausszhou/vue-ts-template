import type { AxiosInstance } from "axios";
import { useUIStore } from "@/store/ui";

export function useLang(axiosInstance: AxiosInstance) {
  const uiStore = useUIStore();
  axiosInstance.interceptors.request.use((config) => {
    config.headers["Accept-Language"] = uiStore.lang;
    return config;
  });
}
