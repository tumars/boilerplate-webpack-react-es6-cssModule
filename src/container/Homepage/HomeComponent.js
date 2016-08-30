import React, {PropTypes, Component } from 'react';
import {Link} from 'react-router';
import Hammer from 'react-hammerjs'
import Dialog from '../../components/Dialog/index.js'

import style from './style.less'


class Home extends Component {

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
				<Dialog
					visible= {this.state.DialogVisible}
					onClose= {this.hideDialog.bind(this)}
					title= "I'm Dialog"
				>
                    <div className="content">
                        here are some tips!
                    </div>
					<a href="javscript:;" className="btn-dialog" onClick={this.hideDialog.bind(this)}>OK</a>
				</Dialog>
				<div className={style.wrapper}>
					<h1>{ this.props.title }</h1>
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
				<Hammer onTap={this.props.onChangeTitle}><a href="javascript:;" className="btn-primary">change title (by redux)</a></Hammer>
				<a href="javascript:;" className="btn-primary" onClick={this.showDialog.bind(this)}>open a dialog</a>
				<Link to="about" className="btn-primary" activeClassName="btn.positive">About Page</Link>
				<Link to="contact" className="btn-primary">Contact Page</Link>
				<Link to="fundlist" className="btn-primary">fundlist Page</Link>
				<form onSubmit={this.props.handleSubmit} className={style.form}>
					<input type="text" placeholder="Enter page name"/>
					<button type="submit">Go</button>
				</form>
			</div>
		</div>
		);
	}
}


Home.propTypes = {
	onChangeTitle: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired
}

export default Home