import { defineConfig } from 'tsup';

export default defineConfig({
    format: ["esm"],
    entry: ["./scripts/main.ts"],
    skipNodeModulesBundle: true,
    clean: true,
    outDir: "./behaviours/subpacks/vanilla/scripts",
    noExternal: [
        "@madlad3718/mcvec3",
        "@bedrock-oss/bedrock-boost"
    ],
    minify: true,
    sourcemap: true
});
