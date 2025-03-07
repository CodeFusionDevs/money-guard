import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: "/money-guard/",
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
    plugins: [react()],
  };
});
