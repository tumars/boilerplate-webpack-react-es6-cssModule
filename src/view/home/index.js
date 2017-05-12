import { connect } from 'react-redux'
import history from 'history'
import HomeComponent from './component.js'

const mapDispatchToProps = (dispatch) => {
	return {
		hanldeChangHello() {
			dispatch({
				type: 'CHANGE_HELLO'
			})
		},
		hanldeGoList() {
			history.push('/list')
		}
	}	
}

const mapStateToProps = (state) => {
    return {
        helloText: state.HomeInfo.helloText,
		userIp: state.HomeInfo.userIp
    }
}


const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeComponent)

export default Home;