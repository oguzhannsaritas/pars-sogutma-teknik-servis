import { defineConfig, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { services } from "./src/data/services";
import { getHomeSeo, getServiceSeo, replaceManagedSeoTags } from "./src/lib/seo-data";

const imageExtensions = ["webp", "jpg", "jpeg", "png"];

async function readImageManifestFolder(folderPath: string, publicPath: string) {
  const entries = await readdir(folderPath, { withFileTypes: true }).catch(() => []);
  const filesByIndex = new Map<number, string>();

  entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name.match(/^(\d+)\.(webp|jpe?g|png)$/i))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .sort((a, b) => {
      const indexDiff = Number(a[1]) - Number(b[1]);
      if (indexDiff !== 0) return indexDiff;
      return imageExtensions.indexOf(a[2].toLowerCase()) - imageExtensions.indexOf(b[2].toLowerCase());
    })
    .forEach((match) => {
      const imageIndex = Number(match[1]);
      if (filesByIndex.has(imageIndex)) return;
      filesByIndex.set(imageIndex, `${publicPath}/${match[1]}.${match[2]}`);
    });

  return Array.from(filesByIndex.values());
}

async function readImageManifestGroup(group: "services" | "sectors") {
  const groupDir = path.resolve(process.cwd(), "public", group);
  const folders = await readdir(groupDir, { withFileTypes: true }).catch(() => []);
  const manifest: Record<string, string[]> = {};

  await Promise.all(
    folders
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        manifest[entry.name] = await readImageManifestFolder(
          path.join(groupDir, entry.name),
          `/${group}/${entry.name}`
        );
      })
  );

  return Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
}

async function generateImageManifest() {
  const generatedDir = path.resolve(process.cwd(), "src", "generated");
  await mkdir(generatedDir, { recursive: true });

  const serviceImageManifest = await readImageManifestGroup("services");
  const sectorImageManifest = await readImageManifestGroup("sectors");

  await writeFile(
    path.join(generatedDir, "image-manifest.ts"),
    `export const serviceImageManifest = ${JSON.stringify(serviceImageManifest, null, 2)} as const;\n\nexport const sectorImageManifest = ${JSON.stringify(sectorImageManifest, null, 2)} as const;\n`
  );
}

function imageManifestPlugin() {
  return {
    name: "image-manifest",
    async buildStart() {
      await generateImageManifest();
    },
    configureServer(server: ViteDevServer) {
      const publicServicesDir = path.resolve(process.cwd(), "public", "services");
      const publicSectorsDir = path.resolve(process.cwd(), "public", "sectors");

      server.watcher.add([publicServicesDir, publicSectorsDir]);
      server.watcher.on("add", generateImageManifest);
      server.watcher.on("unlink", generateImageManifest);
    },
  };
}

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
  plugins: [imageManifestPlugin(), react(), tailwindcss(), tsConfigPaths(), seoStaticPagesPlugin()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: false,
  },
});
