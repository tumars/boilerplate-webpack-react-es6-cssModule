import { connect } from 'react-redux'
import history from 'myhistory'
import { changeText, getUserIp } from './homeReducer'
import HomeComponent from './component.js'

const mapDispatchToProps = (dispatch) => {
	return {
		handleGetUser() {
			dispatch(getUserIp(1111222))
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
		userIp: state.HomeReducer.userIp
    }
}


const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeComponent)

export default Home;