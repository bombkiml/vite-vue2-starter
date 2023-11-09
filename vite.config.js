import { defineConfig, loadEnv } from 'vite';
const { createVuePlugin } = require('vite-plugin-vue2');
import path from 'path';

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [ createVuePlugin() ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '^/android/.*': {
          target: process.env.VITE_APP_TWO_API,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: path => path.replace(/^\/android/, ''),
        },
        '^/vipclass/.*': {
          target: process.env.VITE_APP_THREE_API,
          changeOrigin: true,
          //headers: { Authentication: 'Beerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAyNCwiZmlyc3RuYW1lIjoi4LiT4Lix4LiS4Lie4Lix4LiS4LiZ4LmMIiwic3VybmFtZSI6IuC4iuC4tOC4meC4nuC4oyIsImlhdCI6MTY5OTQzMTAxNCwiZXhwIjoxNjk5NTE3NDE0fQ.Zc2crP9E0vGkmT9gNKwoZ2eg70wc8IxQAZevPuJyBa8' },
          secure: false,
          ws: true,
          rewrite: path => path.replace(/^\/vipclass/, ''),
        },
        '^/twozefive/.*': {
          target: process.env.VITE_APP_ONE_API,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: path => path.replace(/^\/twozefive/, ''),
          configure: (proxy, _options) => {
            proxy.on('error', (err, _req, _res) => {
              console.log('proxy error', err);
            });
            proxy.on('proxyReq', (proxyReq, req, _res) => {
              console.log('Sending Request to the Target:', req.method, req.url);
            });
            proxy.on('proxyRes', (proxyRes, req, _res) => {
              console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
            });
          },
        },
      },
    },
  });
}
