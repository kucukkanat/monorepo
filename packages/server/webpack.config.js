const baseConfig = require("architecture/webpack.config")
const path = require("path")
module.exports = {
    ...baseConfig,
    entry: path.resolve(__dirname,"src/index.ts"),
    target: "node",
    plugins:[]
}