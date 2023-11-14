import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~/enums': '/src/enums',
      '~/helpers': '/src/helpers',
      '~/modules': '/src/modules',
      '~/components': '/src/components',
      '~/pages': '/src/pages',
      '~/router': '/src/router',
      '~/store': '/src/store',
      '~/styles': '/src/styles',
      '~/types': '/src/types',
      '~/ui': '/src/ui'
    }
  },
  base: '/academyocean'
})
