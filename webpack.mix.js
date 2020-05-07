const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin

mix.js('resources/js/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
	.webpackConfig({
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'resources/js/')
			}
		},
		output: {
			chunkFilename: 'js/components/[chunkhash].js',
			path: path.resolve(__dirname, './public')
		},
		plugins: [new BundleAnalyzerPlugin()]
	})
