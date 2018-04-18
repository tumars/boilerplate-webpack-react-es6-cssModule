import { connect } from 'react-redux'
import _ut from 'my-util'
import { changeUserInfo, increaseCount } from 'reducers/user-info'
import Component from './component.js'

const mapDispatchToProps = (dispatch) => {
	const getUserInfo = () => {
		const wid = _ut.fixNum(window.innerWidth)
		const hei = _ut.fixNum(window.innerHeight)

		dispatch(changeUserInfo(`${wid} * ${hei}`))
	}
	const countTime = () => {
		dispatch(increaseCount())
	}

	let timer;

	return {
		initData () {
			getUserInfo();
			timer = setInterval(()=>{
				countTime()
			}, 1000);
		},
		clearHandle() {
			clearInterval(timer)
		},
		
	}	
}
	
const mapStateToProps = (state) => {
	const { screenSize, countValue, tomorrow } = state.UserReducer
    return {
		screenSize, countValue, tomorrow
    }
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Component)