const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-router-dom': path.resolve(__dirname, './node_modules/react-router-dom'),
    }
  },
  externals: {
    // Don't bundle react or react-router-dom      
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-router-dom": {
      commonjs: "react-router-dom",
      commonjs2: "react-router-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};