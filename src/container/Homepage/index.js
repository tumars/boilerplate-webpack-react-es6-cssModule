import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Header from '../../components/Header/index.js';
import Dialog from '../../components/Dialog/index.js';


import reset from './reset.less';
import style from './style.less';
import btn from '../../components/Button/button.less';


class Homepage extends Component {
	constructor (props) {
        super(props);

        this.state = {
            DialogVisible: false
        }
    }

    componentWillMount() {
    	console.log(this.props)
    }

    showDialog () {
        this.setState({
            DialogVisible: true
        });
    }

    hideDialog () {
        this.setState({ DialogVisible: false });
    }

    handleTouchTap() {
    	console.log('now you can use tap event!')
	}

	handleSubmit(e) {
		e.preventDefault();
		const page = e.target.elements[0].value;
		const path = `/${page}/`;
		browserHistory.push(path);
	}

	rtest() {
		// this.context.router.push('/about')

		this.props.dispatch({type: 'sayHi'})

		// this.props.dispatch(addText('haha'))
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
					<h1>{ this.props.changeText.text }</h1>
			      	<article>
			      		this demo includes following parts:
			      		<ul>
			      			<li>React</li>
			      			<li>React-Router</li>
			      			<li>Redux</li>
			      			<li>ES6</li>
			      			<li>Webpack</li>
			      			<li>CssModule</li>
			      		</ul>
			      	</article>
			      	{/*<AlloyFinger
			            onTap={this.handleTouchTap.bind(this)}>
			            <div className="test">tttt</div>
			        </AlloyFinger>*/}
			        <a href="javascript:;" className={btn.primary} onClick={this.rtest.bind(this)}>test</a>
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


const mapStateToProps = (state) => {
    return {
        changeText: state.changeText
    }
}


export default connect(mapStateToProps)(Homepage)