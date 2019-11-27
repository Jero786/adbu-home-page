const withSass = require('@zeit/next-sass');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  // some configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
  // another configuration
};

module.exports = withSass({
	webpack(config) {
		const newConfig = { ...config };
		newConfig.plugins = [
			...config.plugins,
			new FilterWarningsPlugin({
				exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
			}),
		];
		return newConfig;
	}
});
