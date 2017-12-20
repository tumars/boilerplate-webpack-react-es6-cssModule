module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-px-to-viewport')({
			viewportWidth: 750,
			viewportHeight: 568,
			unitPrecision: 5,
			viewportUnit: 'vw',
			selectorBlackList: [],
			minPixelValue: 1,
			mediaQuery: false
        })
    ]
}