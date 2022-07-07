const path = require('path');

module.exports = {
    target: "node", // Or "async-node"
    mode: 'production',

    entry: './calc.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    resolve: {
        fallback: {
            util: require.resolve("util/")
        }
    },

    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    
};
