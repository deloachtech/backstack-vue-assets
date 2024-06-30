import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/guide/build.html#library-mode

export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        { src: 'src/assets/css/*', dest: 'dist/assets/css' },
        { src: 'src/assets/js/*', dest: 'dist/assets/js' },
        { src: 'src/assets/data/*', dest: 'dist/assets/data' }
      ],
      hook: 'writeBundle' // Run the plugin at the writeBundle hook
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/components/index.js"),
      name: "VueAssets",
      // the name of the output files when the build is run
      fileName: "vue-assets",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
        //assetFileNames: 'assets/[name]-[hash][extname]'
      },
    },
  }

})
