import react from "@vitejs/plugin-react";
import { readdirSync } from "fs";
import * as path from "path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import svgr from "vite-plugin-svgr";

const absolutePathAliases: { [key: string]: string } = {};

const srcPath = path.resolve("./src/");
const srcRootContent = readdirSync(
  srcPath,
  { withFileTypes: true }
).map((dirent) => dirent.name.replace(/(\.ts){1}(x?)/, ""));

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

export default defineConfig({
  base: "",
  resolve: {
    alias: {
      ...absolutePathAliases
    }
  },
  root: "./src",
  build: {
    outDir: "../dist"
  },
  plugins: [
    react(), svgr({
      include: "**/*.svg"
    }),
    viteSingleFile()
  ]
});
