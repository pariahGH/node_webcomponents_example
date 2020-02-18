// these are imports - note how these are different from the ones we use in the src folder. 
const webpack = require('webpack') // webpack is the bundler.
const path = require('path') // the path package lets us perform some handy dandy path operations
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // for a real app, this would be used to minify our final bundle
                                                            // which tries to make the actual bundle as small as possible
// this module (file) is exporting an object                                                            
module.exports = {
    entry: {    // this tells webpack what files we want to include in the final bundle. 
      'build':['./src/todo_container.js','./src/todo_item.js'], // we specify both js files because neither of them imports the other
                                                                // webpack will automatically include anything that is imported into these files, like the html
    },
    output:{    // this tells webpack where to put the final bundle
        filename:'[name].js',
        path: path.resolve(__dirname, 'build') // no matter what, this path will point to the build folder in the same folder as this script is located
    },
    module: {
        // these are what tell webpack how to handle different file types it encounters while building
        // this is an array of objects
        rules: [{
            include: [path.resolve(__dirname, 'src')], 
            loader: 'babel-loader', // what plugin to use to handle this file
    
            options: { // plugin specific options
                plugins: ['syntax-dynamic-import',"transform-custom-element-classes",
                "transform-es2015-classes"],
        
                presets: [['env', {
                    'modules': false
                }]]
            },
            // how to identify the files this rule applies to
            test: /\.js$/
      },{
        test: /\.html$/,
        use:['raw-loader']
    }]
    },
    mode: 'development', // you can use this to trigger differnt code paths depending on if the bundle is being built for testing, production, etc
    plugins:[ // plugins here are applied to the built files, and can do things like check for duplicates, split code, etc
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}