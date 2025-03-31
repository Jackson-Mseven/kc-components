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
  external: ['react', 'react-dom', 'antd'],
  plugins: [
    nodeResolve({ modulesOnly: true }),
    commonjs(),
    typescript(tsConfig),
  ],
});

const esmConfig = {
  ...baseConfig({
    declaration: true,
    declarationDir: DIR_MAP.ESM,
  }),
  output: {
    dir: DIR_MAP.ESM,
    format: 'esm',
    preserveModules: true,
  },
};

const cjsConfig = {
  ...baseConfig({
    declaration: true,
    declarationDir: DIR_MAP.CJS,
  }),
  output: {
    dir: DIR_MAP.CJS,
    format: 'cjs',
    exports: 'named',
    preserveModules: true,
  },
};

const umdConfig = {
  ...baseConfig(),
  output: [
    {
      file: DIR_MAP.UMD + '/index.js',
      format: 'umd',
      name: 'KcComponents',
      globals: {
        react: 'React',
        antd: 'antd',
      },
      sourcemap: true,
    },
    {
      file: DIR_MAP.UMD + '/index.min.js',
      format: 'umd',
      name: 'KcComponents',
      plugins: [terser()],
      sourcemap: true,
    },
  ],
};

export default defineConfig([esmConfig, cjsConfig, umdConfig]);
