import React, { Component } from 'react';

import Header from '../components/header/index.js';

import style from './style.less';


export default class App extends Component {
	render() {
		return (
			<div className={style.homePage}>
				<Header />
		      	<h1>Hello, world</h1>
    		</div>
		);
	}
}