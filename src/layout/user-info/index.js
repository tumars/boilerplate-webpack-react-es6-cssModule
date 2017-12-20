import { connect } from 'react-redux'
import _ut from 'my-util'
import { changeUserInfo, increaseCount } from 'reducers/user-info'
import UserComponent from './component.js'

const mapDispatchToProps = (dispatch) => {
	return {
		getUserInfo () {
			const wid = _ut.fixNum(window.innerWidth)
			const hei = _ut.fixNum(window.innerHeight)

			dispatch(changeUserInfo(`${wid} * ${hei}`))
		},
		countTime() {
			dispatch(increaseCount())
		}
	}	
}
	
const mapStateToProps = (state) => {
	const { screenSize, countValue } = state.UserReducer
    return {
		screenSize, countValue
    }
}

const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserComponent)

export default Home;