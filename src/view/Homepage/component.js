import React, {PropTypes, Component } from 'react'
import {Link} from 'react-router'
import Dialog from 'Dialog'

import style from './style.less'


class Home extends Component {

	constructor (props) {
        super(props);
        this.state = {
            DialogVisible: false
        }
    }
    componentDidMount() {
		this.content.style.height = window.innerHeight + 'px'
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
			<div className={style.content} ref={node => this.content = node}>
				<Dialog
					visible={this.state.DialogVisible}
					onClose={this.hideDialog.bind(this)}
					isConfirm={true}
					onConfirm={this.hideDialog.bind(this)}
					title= "I'm Dialog"
				>
                    <div className="content">
                        here are some tips!
                    </div>
				</Dialog>
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
				<a href="javascript:;" className="btn-primary" onClick={this.props.onChangeTitle}>change title (by redux)</a>
				<a href="javascript:;" className="btn-primary" onClick={this.showDialog.bind(this)}>open a dialog</a>
				<Link to="about" className="btn-primary" activeClassName="btn.positive">About Page</Link>
				<Link to="contact" className="btn-primary">Contact Page</Link>
				<Link to="fundlist" className="btn-primary">fundlist Page</Link>
				<form onSubmit={this.props.handleSubmit} className={style.form}>
					<input type="text" placeholder="Enter page name"/>
					<button type="submit">Go</button>
				</form>
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