const path = require('path')
const webpack = require('webpack');

module.exports = {
    mode : 'development',
    devtool : 'evel',
    resolve : {
        extensions : ['.jsx','.js','.tsx','.ts']
    },
    entry : {
        app : './client'
    }
}
