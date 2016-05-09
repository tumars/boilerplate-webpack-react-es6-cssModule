import React, { Component } from 'react';

import Header from '../components/Header/index.js';
import Dialog from '../components/Dialog/index.js';

import style from './style.less';
import btn from '../components/Button/button.less';


export default class App extends Component {
	render() {
		return (
			<div className={style.homePage}>
				<Header />
				<Dialog />
		      	<h1>Hello, world</h1>
		      	<article>
		      		this is a demo for cssModule!
		      	</article>
		      	<div className={style.content}>
		      		<div className={style.left}>
		      			here's left
		      		</div>
		      		<div className={style.right}>
		      			here's right
		      		</div>
		      	</div>
		      	<a href="javascript:;" className={btn.primary}>primary button</a>
		      	<a href="javascript:;" className={btn.disabled}>disabled button</a>
		      	<a href="javascript:;" className={btn.primary}>Click Me <small>(to open a dialog)</small></a>
    		</div>
		);
	}
}
