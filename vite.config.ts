import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import typescript from '@rollup/plugin-typescript'

const resolvePath = (str: string) => path.resolve(__dirname, str)

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.tsx'),
      name: 'ci-pipeline-vue',
      fileName: (format) => `ci-pipeline-vue.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue-demi'],
      output: {
        dir: resolvePath('dist'),
        sourcemap: true,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          'vue-demi': 'VueDemi'
        }
      },
    }
  },
  plugins: [
    vue(),
    typescript({
      'target': 'es2020',
      'rootDir': resolvePath('./src'),
      'declaration': true,
      'declarationDir': resolvePath('./dist'),
      exclude: resolvePath('./node_modules/**'),
      allowSyntheticDefaultImports: true
    }),
  ]
})
