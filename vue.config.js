const path = require('path')

module.exports = {
	outputDir: 'dist',
	productionSourceMap: false,
	runtimeCompiler: true,
	assetsDir: 'assets',
	devServer: {
		host: 'localhost',
		port: 1111,
		open: true
	},
	configureWebpack: {
		resolve: {
			alias: {
				src: path.join(__dirname, 'src'),
				views: path.join(__dirname, 'src/views'),
				store: path.join(__dirname, 'src/store'),
				assets: path.join(__dirname, 'src/assets'),
				components: path.join(__dirname, 'src/components')
			}
		}
	}
}
