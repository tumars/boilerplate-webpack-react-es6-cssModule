import { connect } from 'react-redux'
import history from 'myhistory'
import { addList } from './listReducer'
import ListComponent from './listComponent.js'
import Dialog from 'Dialog'


const mapDispatchToProps = (dispatch) => {
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
			history.go(-1)
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