import React, {PropTypes, Component } from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import Spin from 'Spin'
import Dialog from 'Dialog'
import styles from './style.less'


class FundList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
		this.props.dataInit()
    }

    render() {
		const {  FundData, dataInit, handleRefresh, backHome, handleCloseDialog } = this.props
		let list = (
			<ul>
				<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{FundData.datas.map((elem, index) => 
						<li className={styles.funditem} key={index}><i>{index}</i>{elem.name}</li>
					)}
				</ReactCSSTransitionGroup>
			</ul>
		)
		let spin = FundData.isloading ? (<Spin />) : null
		let dialogTip = (<Dialog 
							title="提示" 
							visible={FundData.isShowTip}
							isConfirm={true}
							onConfirm={() => handleCloseDialog()}
							onClose={() => handleCloseDialog()} 
						>
							<p>{FundData.tipMassge}</p>
						</Dialog>)

		return (
			<div className={styles.content}>	
				{spin}
				{dialogTip}			
				<h1>Fund List</h1>
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
	backHome: PropTypes.func.isRequired,
	handleCloseDialog: PropTypes.func.isRequired
}

FundList.defaultProps = {
    FundData: {
		datas:[],
		page:0,
		isloading: true,
		isShowTip: false,
		tipMassge: null
    }
};


export default FundList
