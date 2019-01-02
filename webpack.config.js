const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
      'build':['./src/todo_container.js','./src/todo_item.js'],
    },
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            include: [path.resolve(__dirname, 'src')],
            loader: 'babel-loader',
    
            options: {
                plugins: ['syntax-dynamic-import',"transform-custom-element-classes",
                "transform-es2015-classes"],
        
                presets: [['env', {
                    'modules': false
                }]]
            },
    
            test: /\.js$/
      },{
        test: /\.html$/,
        use:['raw-loader']
    }]
    },
    mode: 'development',
    plugins:[
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}