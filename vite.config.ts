import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { viteSingleFile } from "vite-plugin-singlefile";

// GitHub Pages repo base path: set REPO_NAME env var, or use '/' for user/org pages
// Default repo: lxl1234-lxl/Collegium-Cassellianum
const base = process.env.REPO_NAME ? `/${process.env.REPO_NAME}/` : "/Collegium-Cassellianum/";

// Remove type="module" from the final inline script and move it to the end
// of <body> so the classic script runs after #root is in the DOM.
// (defer is ignored on inline scripts per HTML spec, so physical placement
//  is the only reliable way to ensure #root exists when the script executes.)
// This also fixes mobile browsers / WebViews that have flaky ES module support.
function removeScriptModuleType(): Plugin {
  return {
    name: 'remove-script-module-type',
    enforce: 'post',
    transformIndexHtml(html) {
      let scriptTag = '';
      html = html.replace(
        /<script\s+type="module"([^>]*)>([\s\S]*?)<\/script>/gi,
        (_, attrs, body) => {
          scriptTag = `<script${attrs}>${body}</script>`;
          return '';
        },
      );
      if (scriptTag) {
        html = html.replace('</body>', `${scriptTag}</body>`);
      }
      return html;
    },
  };
}

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
    removeScriptModuleType(),
  ],
})
