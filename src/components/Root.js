var React = require('react')
require('../style/main.less')

module.exports = (props) => {
	return (
		<html>
			<head>
				<title>Luke Hansell</title>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"></link>
				<link rel="stylesheet" href="/main.css"></link>
				<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			</head>
			<body>
				<div id="app">
					{props.children}
				</div>
				<script src="/app.js"></script>
				<script src="/js/googleAds.js"></script>
			</body>
		</html>
	)
}
