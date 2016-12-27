import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import FundList from './component'
// import fetchJsonp from 'fetch-jsonp'  如果使用 jsonp，使用此依赖，方法查看 https://github.com/camsong/fetch-jsonp


const mapDispatchToProps = (dispatch) => {
	return{
		dataInit: () => {
			const result = fetch('http://localhost:3003/page'+1)
			result.then(res => res.json())
			.then(MovieData => {
				dispatch({type:'INIT_FUND',  item:{datas: MovieData.data, page: 1}})
			});
		},
		handleRefresh(page) {
			dispatch({type:'TURN_PAGE', item:{isloading: true}})

			setTimeout(function () {
				const result = fetch('http://localhost:3003/page'+(page+1))

				result.then(res => {
					if (res.ok == true) {return res.json()}

					dispatch({type:'TURN_PAGE', item:{isloading: false}})
					return false;
				})
				.then(MovieData => {
					if (MovieData) {
						dispatch({type:'TURN_PAGE', item:{datas: MovieData.data, page: page+1, isloading: false}})
					} else {
						dispatch({type:'TURN_PAGE', item:{isloading: false, isShowTip: true, tipMassge: "已无更多"}})
					}
				});
			}, 500);
		},
		backHome: () => {
			browserHistory.push(/${index}/);
		},
		handleCloseDialog: () => {
			dispatch({type:'TURN_PAGE', item:{isShowTip: false}})
		}
	}	
}

const mapStateToProps = (state) => {
    return {
        FundData: state.FundPageInfo
    }
}

const FundListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FundList)

export default FundListContainer;