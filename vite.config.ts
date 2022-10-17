import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readFileSync } from 'fs'

export default ({ mode }) =>
  defineConfig({
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'Userscript',
        formats: ['iife'],
        fileName: () => `${mode}.user.js`,
      },
    },
    esbuild: {
      banner: readFileSync(resolve(__dirname, 'src/Header/production.ts'), 'utf-8').replace(
        /(==\/UserScript==)[\s\S]+$/,
        '$1'
      ),
    },
  })
