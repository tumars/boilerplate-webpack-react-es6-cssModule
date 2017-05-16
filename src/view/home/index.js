import { connect } from 'react-redux'
import history from 'myhistory'
import { changeText, getUserInfo } from './home-reducer'
import HomeComponent from './home-component.js'

const mapDispatchToProps = (dispatch) => {
	return {
		handleGetUser() {
			const wid = window.innerWidth
			const hei = window.innerHeight
			dispatch(getUserInfo(`${wid}*${hei}`))
		},
		hanldeChangHello() {
			dispatch(changeText())
		},
		hanldeGoList() {
			history.push('/list')
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