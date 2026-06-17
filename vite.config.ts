import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'

const config = defineConfig({
  plugins: [
    devtools(),
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: 'I',
          extension: 'jsx',
          enabledCollections: ['mdi']
        })
      ]
    }),
    Icons({
      compiler: "jsx",
      jsx: "react",
    }),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    viteReact(),
  ],
})

export default config
