import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { viteSingleFile } from "vite-plugin-singlefile";

// GitHub Pages repo base path: set REPO_NAME env var, or use '/' for user/org pages
// Default repo: lxl1234-lxl/Collegium-Cassellianum
const base = process.env.REPO_NAME ? `/${process.env.REPO_NAME}/` : "/Collegium-Cassellianum/";

// https://vite.dev/config/
export default defineConfig({
  base,
  build: {
    sourcemap: false,
    cssMinify: true,
    minify: 'esbuild',
    assetsInlineLimit: 1024 * 1024, // 1MB — inline all assets as base64
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    tsconfigPaths(),
    viteSingleFile({ removeViteModuleLoader: true }),
  ],
})
