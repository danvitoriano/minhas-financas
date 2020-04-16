"use strict"
const path = require("path")

module.exports = {
    entry: {
        main: path.resolve("./js/app/_boot.js")
    },
    output: {
        filename: "_boot.bundle.js",
        path: path.resolve("./build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    mode: "none",
    devtool: "#source-map"
}