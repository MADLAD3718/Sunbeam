import { defineConfig } from 'tsup';

export default defineConfig({
    format: ["esm"],
    entry: ["./src/main.ts"],
    skipNodeModulesBundle: true,
    clean: true,
    outDir: "./behaviours/scripts",
    noExternal: [
        "@madlad3718/mcvec3",
        "@bedrock-oss/bedrock-boost"
    ],
    sourcemap: true
});
