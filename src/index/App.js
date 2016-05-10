import React, { Component } from 'react';

import Header from '../components/Header/index.js';
import Dialog from '../components/Dialog/index.js';

import reset from './reset.less';
import style from './style.less';
import btn from '../components/Button/button.less';


export default class App extends Component {
	constructor (props) {
        super(props);

        this.state = {
            DialogVisible: false
        }
    }

    showDialog () {
        this.setState({
            DialogVisible: true
        });
    }

    hideDialog () {
        this.setState({ DialogVisible: false });
    }

	render() {
		return (
			<div className={style.homePage}>
				<Header />
				<Dialog
					visible= {this.state.DialogVisible}
					onClose= {this.hideDialog.bind(this)}
					title= "I'm Dialog"
				>
                    <div className="content">
                        here are some tips!
                    </div>
					<a href="javscript:;" className={btn.positive} onClick={this.hideDialog.bind(this)}>OK</a>
				</Dialog>
				<div className={style.wrapper}>
					<h1>Hello, world</h1>
			      	<article>
			      		this demo includes following parts:
			      		<ul>
			      			<li>React</li>
			      			<li>ES6</li>
			      			<li>Webpack</li>
			      			<li>CssModule</li>
			      		</ul>
			      	</article>
			      	<div className={style.content}>
			      		<div className={style.left}>
			      			that's left
			      		</div>
			      		<div className={style.right}>
			      			that's right
			      		</div>
			      	</div>
			      	<a href="javascript:;" className={btn.primary}>primary button</a>
			      	<a href="javascript:;" className={btn.disabled}>disabled button</a>
			      	<a href="javascript:;" className={btn.primary} onClick={this.showDialog.bind(this)}>Click Me <small>(to open a dialog)</small></a>
				</div>
    		</div>
		);
	}
}
