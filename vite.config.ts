import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { services } from "./src/data/services";
import { getHomeSeo, getServiceSeo, replaceManagedSeoTags } from "./src/lib/seo-data";

function seoStaticPagesPlugin() {
  return {
    name: "seo-static-pages",
    apply: "build" as const,
    async closeBundle() {
      const distDir = path.resolve(process.cwd(), "dist");
      const indexPath = path.join(distDir, "index.html");
      const template = await readFile(indexPath, "utf8");

      await writeFile(indexPath, replaceManagedSeoTags(template, getHomeSeo()));

      await Promise.all(
        services.map(async (service) => {
          const routeDir = path.join(distDir, service.slug);
          await mkdir(routeDir, { recursive: true });
          await writeFile(
            path.join(routeDir, "index.html"),
            replaceManagedSeoTags(template, getServiceSeo(service))
          );
        })
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths(), seoStaticPagesPlugin()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: false,
  },
});
