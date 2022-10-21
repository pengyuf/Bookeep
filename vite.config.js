import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { viteVConsole } from 'vite-plugin-vconsole';

const pathResolve = (dir) => resolve(__dirname, dir);

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    }),
    // viteVConsole({
    //   entry: pathResolve('src/main.js'),
    //   localEnabled: true,
    //   enabled: false,
    //   config: {
    //     maxLogNumber: 1000,
    //     theme: 'dark',
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/var.scss";`
      }
    }
  },
})
