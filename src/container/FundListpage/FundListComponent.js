import React, {PropTypes, Component } from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import Spin from '../../components/Spin/index.js'

import styles from './style.less'


class FundList extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
		this.props.dataInit()
    }

    render() {
		const {  FundData, dataInit, handleRefresh, backHome } = this.props
		let list = (
			<ul>
				<ReactCSSTransitionGroup transitionName="fade">
					{FundData.datas.map((elem, index) => 
						<li className={styles.funditem} key={index}><i>{index}</i>{elem.SHORTNAME}</li>
					)}
				</ReactCSSTransitionGroup>
			</ul>
		)
		let spin = FundData.isloading ? (<Spin />) : null

		return (
			<div className={styles.content}>				
				<h1>Fund List</h1>
				{spin}
				{list}
				<div className={styles.bottom}>
					<div>第{FundData.page}页</div>
					<div onClick={() => handleRefresh(FundData.page)}>加载更多</div>
					<div onClick={() => dataInit()}>折叠</div>
					<div onClick={() => backHome()}>返回首页</div>
				</div>
			</div>
		)
    }
}


FundList.propTypes = {
	FundData: PropTypes.object.isRequired,
	dataInit: PropTypes.func.isRequired,
	handleRefresh: PropTypes.func.isRequired,
	backHome: PropTypes.func.isRequired
}

FundList.defaultProps = {
    FundData: {
		datas:[],
		page:0,
		isloading: true
    }
};


export default FundList
