import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mfe_remote',
      shared: ['react', 'react-dom'],
      exposes: {
        './Button': './src/Button.tsx',
        "./LoginForm": "./src/components/LoginForm.tsx",
        "./UserProfileCard": "./src/components/UserProfileCard.tsx",
        "./useAuth": "./src/hooks/useAuth.ts",
        "./types" : "./src/types.ts"
      },
    }),
  ],
  server: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
});
