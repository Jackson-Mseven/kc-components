import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';

const DIR_MAP = {
  ESM: 'es',
  CJS: 'lib',
  UMD: 'dist',
};

const baseConfig = (tsConfig) => ({
  input: 'src/index.ts',
  plugins: [
    nodeResolve({ extensions: ['.ts'] }),
    commonjs(),
    typescript(tsConfig),
  ],
});

const esmConfig = defineConfig({
  ...baseConfig({
    declaration: true,
    declarationDir: DIR_MAP.ESM,
  }),
  output: {
    dir: DIR_MAP.ESM,
    format: 'esm',
    preserveModules: true,
  },
});

const cjsConfig = defineConfig({
  ...baseConfig({
    declaration: true,
    declarationDir: DIR_MAP.CJS,
  }),
  output: {
    dir: DIR_MAP.CJS,
    format: 'cjs',
    exports: 'named',
  },
});

const umdConfig = defineConfig({
  ...baseConfig(),
  output: [
    {
      file: DIR_MAP.UMD + '/index.js',
      format: 'umd',
      name: 'KcUtils',
    },
    {
      file: DIR_MAP.UMD + '/index.min.js',
      format: 'umd',
      name: 'KcUtils',
      plugins: [terser()],
    },
  ],
});

export default defineConfig([esmConfig, cjsConfig, umdConfig]);
