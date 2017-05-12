import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

import Home from './component'

const mapDispatchToProps = (dispatch) => {
	return{
		onChangeTitle: (e) => {
			e.preventDefault();
			dispatch({type:'sayHi', text: 'Look Here'});
		},
		handleSubmit: (e) => {
			e.preventDefault();
			const page = e.target.elements[0].value;
			const path = `/${page}/`;
			browserHistory.push(path);
		}
	}	
}

const mapStateToProps = (state) => {
    return {
        title: state.changeText.HELLO_TEXT
    }
}


const HomeContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)

export default HomeContainer;