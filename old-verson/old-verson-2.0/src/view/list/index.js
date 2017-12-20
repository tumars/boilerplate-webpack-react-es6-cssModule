import { connect } from 'react-redux'
import { addList } from './list-reducer'
import ListComponent from './list-component.js'
import Dialog from 'co-dialog'


const mapDispatchToProps = (dispatch,props) => {
	return {
		handleGetData(type, page) {
			fetch(`http://localhost:3003/${type}${page}`)
				.then(res => {
					if (!res.ok) {
						Dialog.showMsg('已无更多')
						return false
					} 
					return res.json()
				})
				.then(list => list && dispatch(addList(type, list)))
		},
		handleGoBack() {
			props.history.goBack()
		}
	}	
}
	
const mapStateToProps = (state) => {
    return {
        movieListInfo: state.ListReducer.movieListInfo,
		bookListInfo: state.ListReducer.bookListInfo
	}
}


const List = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListComponent)

export default List