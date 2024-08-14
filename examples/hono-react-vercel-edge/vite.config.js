import react from '@vitejs/plugin-react'
import { telefunc } from 'telefunc/vite'
import vikeNode from 'vike-node/plugin'
import vike from 'vike/plugin'

export default {
  plugins: [
    vikeNode({
      entry: {
        index: 'server/node-entry.js',
        app: {
          path: 'server/app.js',
          runtime: 'vercel'
        }
      }
    }),
    vike({ prerender: true }),
    react(),
    telefunc()
  ],
  ssr: {
    external: true
  }
}