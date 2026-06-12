// app.config.ts
import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
var app_config_default = defineConfig({
  server: {
    preset: "vercel-edge"
  },
  vite: {
    plugins: [tailwindcss(), tsConfigPaths()],
    server: {
      host: "0.0.0.0",
      port: 3e3,
      strictPort: false
    }
  }
});
export {
  app_config_default as default
};
