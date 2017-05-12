import React, { Component }from 'react'
import Dialog from '../Dialog'

const style = {
	box: {
		boxSizing: 'border-box',
		padding: '20px',
		color: 'rgb(16, 142, 233)'
	},
	btn: {
		width: '150px',
		height: '30px',
		lineHeight: '30px',
		margin: '20px 0',
		textAlign: 'center',
		color: '#fff',
		background: '#108ee9',
		borderRadius: '4px'
	}
}


class UseDialog extends Component {

	constructor(props) {
		super(props)
        this.state ={
			showdiaolg: false
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClickS = this.handleClickS.bind(this)
	}
	handleClose() {
		this.setState({
			showdiaolg: false
		})

		console.log('弹框关闭')
	}
	handleClick() {
		this.setState({
			showdiaolg: true
		})
	}
	handleClickS() {
		Dialog.showMsg('HEY, 我是弹框的内容')
	}
	render() {
		const state = this.state 
		const pop = (
			<Dialog 
				onClose={this.handleClose}
				visible={state.showdiaolg}
			>
				<div style={style.box}>
					<h2>我是弹框</h2>
					<p>我是弹框的内容</p>
				</div>
			</Dialog>
		)
		return (
			<div>
				{pop}
				<div style={style.btn} onClick={this.handleClick}>第一种调用方式</div>
				<div style={style.btn} onClick={this.handleClickS}>第二种调用方式</div>
			</div>
			
		)
	}
}

export default UseDialog