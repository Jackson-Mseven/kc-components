import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'kc',
  },
  resolve: {
    atomDirs: [{ type: 'component', dir: 'packages/basic/src' }],
  },
});
