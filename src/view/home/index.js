import { connect } from 'react-redux'
import _ut from 'my-util'
import { changeText, getUserInfo } from './home-reducer'
import HomeComponent from './home-component.js'

const mapDispatchToProps = (dispatch, props) => {
	return {
		handleGetUser() {
			const wid = _ut.fixNum(window.innerWidth)
			const hei = _ut.fixNum(window.innerHeight)

			dispatch(getUserInfo(`${wid}*${hei}`))
		},
		hanldeChangHello() {
			
			dispatch(changeText())
		},
		hanldeGoList() {
			props.history.push('/list')
		}
	}	
}
	
const mapStateToProps = (state) => {
    return {
        helloText: state.HomeReducer.helloText,
		userInfo: state.HomeReducer.userInfo
    }
}


const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeComponent)

export default Home;