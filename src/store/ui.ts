import { defineStore } from "pinia";

export enum EnumLang {
  ZH_CN = "zh-CN",
  EN_US = "en-US",
}

export const useUIStore = defineStore("ui", {
  state: () => ({
    lang: EnumLang.ZH_CN,
  }),
  actions: {
    setLang(lang: EnumLang) {
      this.lang = lang;
    },
  },
});
