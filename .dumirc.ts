import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    logo: '/logo.webp',
  },
  resolve: {
    atomDirs: [
      { type: 'basic', dir: 'packages/basic/src' },
      { type: 'utils', dir: 'packages/utils/src' },
    ],
  },
  alias: {
    '@kc-components/basic': path.resolve(__dirname, './packages/basic/src'),
    '@kc-components/utils': path.resolve(__dirname, './packages/utils/src'),
  },
});
