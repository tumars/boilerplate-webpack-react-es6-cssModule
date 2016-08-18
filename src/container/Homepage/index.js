import React, {PropTypes, Component } from 'react';
import {Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import Hammer from 'react-hammerjs'

import Dialog from '../../components/Dialog/index.js'


import style from './style.less'
import btn from '../../components/Button/button.less'


class Homepage extends Component {

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

	handleSubmit(e) {
		e.preventDefault();
		const page = e.target.elements[0].value;
		const path = `/${page}/`;
		browserHistory.push(path);
	}

	rtest() {
		this.props.dispatch({
			type: 'sayHi',
			text: 'hi hi'
		})
	}

	render() {
		return (
			<div className={style.homePage}>
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
					<h1>{ this.props.changeText.HELLO_TEXT }</h1>
				<article>
					this demo includes following parts:
					<ul>
						<li>React</li>
						<li>React-Router</li>
						<li>Redux</li>
						<li>ES6</li>
						<li>Webpack</li>
						<li>CssModule</li>
						<li>Hammer</li>
					</ul>
				</article>
				<Hammer onTap={this.rtest.bind(this)}><a href="javascript:;" className={btn.primary}>test</a></Hammer>
				<a href="javascript:;" className={btn.primary} onClick={this.showDialog.bind(this)}>open a dialog</a>
				<Link to="about" className={btn.primary} activeClassName="btn.positive">About Page</Link>
				<Link to="contact" className={btn.primary}>Contact Page</Link>
				<form onSubmit={this.handleSubmit} className={style.form}>
					<input type="text" placeholder="Enter page name"/>
					<button type="submit">Go</button>
				</form>
			</div>
		</div>
		);
	}
}


Homepage.propTypes = {
	dispatch: PropTypes.func,
	changeText: PropTypes.object
}


const mapStateToProps = (state) => {
    return {
        changeText: state.changeText
    }
}


export default connect(mapStateToProps)(Homepage)