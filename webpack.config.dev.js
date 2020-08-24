const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {  
    mode: 'development',
    entry: path.join(__dirname, '/src/index.js'),
    output: {
       filename: 'build.js',
       path: path.join(__dirname, '/src/index.js')},
    module:{
       rules:[{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
                      '@babel/react',{
                      'plugins': ['@babel/plugin-proposal-class-properties']}]
        }
       },
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       },
       {
         test: /\.(jpe?g|png|gif|svg)$/i, 
         loader: "file-loader?name=/public/icons/[name].[ext]"
       }]
    },
    resolve: {
      modules: [path.resolve(__dirname, "/src"), "node_modules"],
      extensions: [".js", ".json"],
    },
    plugins:[
       new HWP(
          {template: path.join(__dirname,'/src/index.html')}
       )
    ]
}