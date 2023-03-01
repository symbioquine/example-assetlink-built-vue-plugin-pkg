const { GenerateDefaultPluginConfigYmlFilesPlugin, createDevServerConfig } = require('assetlink-plugin-dev-support');

module.exports = {
  // We have no entry since this package just contains uncompiled plugins
  entry: {},
  output: {
    // Use the current directory to prevent a 'dist/' folder from being created there should be no output, otherwise
    path: __dirname,
  },
  mode: 'development',
  plugins: [
    new GenerateDefaultPluginConfigYmlFilesPlugin({
      pluginDir: __dirname,
      drupalModuleName: 'example_alink_plugins',
    }),
  ],
  devServer: createDevServerConfig({
    pluginDir: __dirname,
  }),
};
