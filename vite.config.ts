import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    monkey({
      entry: "src/main.ts",
      build: {
        metaFileName: true,
      },
      userscript: {
        name: "Evolve",
        namespace: "http://tampermonkey.net/",
        version: "3.3.1.108.9",
        author: `Fafnir, TMVictor, Vollch, schoeggu, elias098`,
        match: ["https://pmotschmann.github.io/Evolve/"],
        grant: "none",
        require: [
          "https://code.jquery.com/jquery-3.6.0.min.js",
          "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js",
        ],
      },
    }),
  ],
});
