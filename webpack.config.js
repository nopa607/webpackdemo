var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebPackPlugin = require('html-webpack-plugin')

var getHtmlConfig = function(name){
    return{
        template    :   './src/view/' + name + '.html',
        filename    :   'view/' + name + '.html',
        inject      :   true,
        hash        :   true,
        chunks      :   [name]
    }
}

var config = {
    entry :  {
        'index' : './src/page/index/index.js',
        'detail': './src/page/detail/detail.js'
    },
    output : {
        path : './dist',
        publicPath: '/dist/',
        filename : 'js/[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            { test: /\.string$/, loader: 'html-loader'}
        ]
    },
    plugins:[
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebPackPlugin(getHtmlConfig('index')),
        new HtmlWebPackPlugin(getHtmlConfig('detail'))
    ],
    devServer:{
        open:true,
        inline:true
    }
}


module.exports = config

