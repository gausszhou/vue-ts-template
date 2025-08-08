import type { AxiosInstance } from "axios";
import { useUIStore } from "@/stores/ui";

export function useLang(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use((config) => {
    const uiStore = useUIStore();
    config.headers["Accept-Language"] = uiStore.lang;
    return config;
  });
}
