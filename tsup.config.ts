import { defineConfig } from 'tsup';

export default defineConfig({
    format: ["esm"],
    entry: ["./scripts/main.ts"],
    skipNodeModulesBundle: true,
    clean: true,
    outDir: "./behaviours/subpacks/default/scripts",
    noExternal: [
        "@madlad3718/mcveclib",
        "@bedrock-oss/bedrock-boost"
    ],
    minify: true,
    sourcemap: true
});
