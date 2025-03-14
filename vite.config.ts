import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';
import {join} from 'path';


export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
    },
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        '@': join(__dirname, 'src'),
        global: "global", // Ensure `global` resolves properly
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000
    }
  }
})
