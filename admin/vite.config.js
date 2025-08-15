import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  esbuild: {
    loader: 'jsx',
    include: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
    ],
    exclude: [],
  },
  server: { 
    port: 1574,
    historyApiFallback: true
  }
})
