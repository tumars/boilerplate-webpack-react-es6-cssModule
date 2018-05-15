import { connect } from 'react-redux'
import _ut from 'my-util'
import { changeUserInfo, increaseCount } from 'reducers/user-info-reducer'
import Toast from 'mo-toast'
import Component from './component.js'

const mapDispatchToProps = (dispatch) => {
	return {
		initData () {
			const wid = _ut.fixNum(window.innerWidth)
			const hei = _ut.fixNum(window.innerHeight)

			dispatch(changeUserInfo(`${wid} * ${hei}`))
		},
		increaseCount() {
			dispatch(increaseCount())
			Toast('+1')
		}
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