import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mfe_host',
      shared: ['react', 'react-dom'],
      remotes: {
        mfe_remote: `mfe_remote@${import.meta.env.MFE_REMOTE_URL}/mf-manifest.json`,
      },
    }),
  ],
  server: {
    port: 3001,
  },
});
