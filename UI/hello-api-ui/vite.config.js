import react from '@vitejs/plugin-react';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  // Load environment variables based on the current mode (development or production)
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    base: './',
    optimizeDeps: {
      include: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
    },
  };
});
