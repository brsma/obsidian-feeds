import esbuild from "esbuild";
import process from "process";
import builtins from "builtin-modules";
import * as fs from "fs";

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/
`;

const staticAssetsPlugin = {
  name: "static-assets-plugin",
  setup(build) {
    build.onLoad({ filter: /.+/ }, () => {
      return {
        watchFiles: ["styles.css", "esbuild.config.mjs"],
      };
    });
  },
};

const prod = process.argv[2] === "production";

esbuild
  .build({
    banner: {
      js: banner,
    },
    bundle: true,
    entryPoints: ["src/main.ts"],
    external: [
      "obsidian",
      "electron",
      "@codemirror/autocomplete",
      "@codemirror/closebrackets",
      "@codemirror/collab",
      "@codemirror/commands",
      "@codemirror/comment",
      "@codemirror/fold",
      "@codemirror/gutter",
      "@codemirror/highlight",
      "@codemirror/history",
      "@codemirror/language",
      "@codemirror/lint",
      "@codemirror/matchbrackets",
      "@codemirror/panel",
      "@codemirror/rangeset",
      "@codemirror/rectangular-selection",
      "@codemirror/search",
      "@codemirror/state",
      "@codemirror/stream-parser",
      "@codemirror/text",
      "@codemirror/tooltip",
      "@codemirror/view",
      ...builtins,
    ],
    format: "cjs",
    logLevel: "info",
    minify: prod ? true : false,
    outfile: "main.js",
    plugins: [staticAssetsPlugin],
    sourcemap: prod ? false : "inline",
    target: "es2016",
    treeShaking: true,
    watch: !prod,
  })
  .catch(() => process.exit(1));
