import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Button from 'mo-button'
import UserCard from 'layout/user-card'
import style from './home.less'

@CSSModules(style, {handleNotFoundStyleName: 'ignore'})
class HomeComponent extends Component {
	constructor(props) {
        super(props)
    }
	componentDidMount() {
		this.props.initData()
	}
	render() {
		const { 
			openDialog, 
			goListPage,
			goMiaoPage,
			countValue
		} = this.props
		
		return (
			<div styleName="wrap">
				<UserCard />
				<p styleName="hello">你好，我是个简单的示例 domo</p>
				<p>{countValue}</p>
				<Button type="primary" onClick={goListPage}>去列表页</Button>
				<Button type="primary" onClick={openDialog}>打开一个弹框</Button>
				<Button type="primary" onClick={goMiaoPage}>如何养猫</Button>
			</div>
		)
	}
}

HomeComponent.propTypes = {
	initData: PropTypes.func,
	goListPage: PropTypes.func
}

export default HomeComponent