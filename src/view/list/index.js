import { connect } from 'react-redux'
import ListComponent from './list-component.js'


const mapDispatchToProps = (dispatch,props) => {
	return {
		goBack() {
			props.history.replace('/')
		}
	}	
}
	
// const mapStateToProps = () => {
//     return null
// }


const List = connect(
	null,
	mapDispatchToProps
)(ListComponent)

export default List