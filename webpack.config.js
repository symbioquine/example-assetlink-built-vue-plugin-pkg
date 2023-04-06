const { VueLoaderPlugin } = require("vue-loader");

const {
  assetLinkIncludedLibraries,
  GenerateDefaultPluginConfigYmlFilesPlugin,
  createDevServerConfig
} = require('assetlink-plugin-dev-support');

module.exports = {
  entry: {
    // Add an entry here for each plugin in the `src` directory that needs building
    'ExampleSimplePage.alink.js': './src/ExampleSimplePage.alink.vue',
    'ExampleChartPage.alink.js': './src/ExampleChartPage.alink.vue',
  },
  output: {
    // Output the built plugins in the current directory - alongside any unbuilt plugins
    path: __dirname,
    // Use just the entry name as our output plugin name
    filename: '[name]',
    // Make our built plugin code use module import/exports
    library: { type: 'commonjs-module' },
    // Required, but don't worry about it (For nerds: with the default `publicPath: "auto"` Webpack
    // outputs code that doesn't work in our Asset Link browser environment - similar to this issue:
    // https://github.com/angular-architects/module-federation-plugin/issues/96)
    publicPath: '/',
  },
  // This can be changed to 'production' - see https://webpack.js.org/configuration/mode/
  mode: 'development',

  // Output a module and don't try and bundle things like `vue` that are provided by Asset Link
  experiments: {
    outputModule: true,
  },
  externalsType: 'module',
  externals: {
    ...assetLinkIncludedLibraries,
  },

  module: {
    rules: [
      {
        test: /\.vue$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "vue-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "vue-style-loader" },
          { loader: "css-loader" },
        ],
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new GenerateDefaultPluginConfigYmlFilesPlugin({
      pluginDir: __dirname,
      drupalModuleName: 'example_built_alink_plugins',
    }),
  ],
  devServer: createDevServerConfig({
    pluginDir: __dirname,
  }),
};
