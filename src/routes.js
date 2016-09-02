import React from 'react'
import {Router, Route} from 'react-router'

import App from './components/App'
import BlogRoll from './components/BlogRoll'
import Post from './components/Post'
import About from './components/About'
import HomePage from './components/HomePage'

module.exports = (
	<Route component={App} >
    <Route path="/" component={HomePage} />
		<Route path="blog" component={BlogRoll} />
		<Route path="posts/:slug" component={Post} name="post" />
		<Route path="about" component={About} />
	</Route>
)
