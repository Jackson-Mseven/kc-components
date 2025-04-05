import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const DIR_MAP = {
  ESM: 'es',
  CJS: 'lib',
  UMD: 'dist',
};

// 处理 Ant Design 样式按需加载
const antdStyles = () => ({
  name: 'antd-styles',
  transform(code, id) {
    if (/node_modules\/antd/.test(id) && id.endsWith('.js')) {
      return code.replace(/import\s+['"].*\.less['"]/, '');
    }
    return null;
  },
});

const baseConfig = (tsConfig) => ({
  external: ['react', 'react-dom', 'antd', 'tslib'],
  input: 'src/index.ts',
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      modulesOnly: true,
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      preferBuiltins: true,
    }),
    commonjs(),
    typescript(tsConfig),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx'],
      presets: [
        '@babel/preset-react',
        ['@babel/preset-env', { modules: false }],
      ],
    }),
    postcss({
      extract: true, // 分离 CSS 文件
      modules: false,
      use: ['less'],
      minimize: true,
    }),
    antdStyles(),
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
    preserveModulesRoot: 'src',
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
    preserveModulesRoot: 'src',
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
        'react-dom': 'ReactDOM',
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
