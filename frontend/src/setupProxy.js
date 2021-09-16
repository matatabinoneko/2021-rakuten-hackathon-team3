const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "http://18.176.60.7:8000/",
			changeOrigin: true,
		})
	);
};
