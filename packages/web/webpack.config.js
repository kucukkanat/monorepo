const baseConfig = require("architecture/webpack.config.js")
const path = require("path")
module.exports = {
    ...baseConfig,
    entry: path.resolve(__dirname, "src/index.tsx"),
}