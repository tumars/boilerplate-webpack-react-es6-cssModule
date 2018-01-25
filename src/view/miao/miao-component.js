import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import ResultCard from 'mo-result-card'
import Steps from 'mo-steps'
import Button from 'mo-button'
import style from './miao.less'


@CSSModules(style, {handleNotFoundStyleName: 'ignore'})
class MiaoComponent extends Component {
	constructor(props) {
        super(props)
    }
	render() {
		return (
			<div styleName="wrap">
				<ResultCard 
					styleName="top"
					type="success"
					title="养猫攻略"
					desc="我在你这个年纪都有两只猫了"
				/>
				<Steps styleName="steps" current={0}>
					<Steps.Step title="捡猫" description="下楼去小区花园"> </Steps.Step>
					<Steps.Step title="洗白白" description="撸一撸吸一吸"> </Steps.Step>
					<Steps.Step title="去医院" description="带去绝育"> </Steps.Step>
				</Steps>
				<ul styleName="detail">
					<li>
						<div>粮</div>
						<div>湿粮干粮猫罐头</div>
					</li>
					<li>
						<div>玩具</div>
						<div>瓦楞纸激光枪逗猫棒</div>
					</li>
					<li>
						<div>厕所</div>
						<div><b>1 </b>猫<b> 2 </b>厕每天铲</div>
					</li>
					<li>
						<div>猫窝</div>
						<div>沙发跟床都是窝</div>
					</li>
				</ul>
				<Button styleName="btn" size="large" onClick={()=>this.props.history.replace('/')}>完成学习</Button>
			</div>
		)
	}
}

MiaoComponent.propTypes = {
	goBack: PropTypes.func
}

export default MiaoComponent
