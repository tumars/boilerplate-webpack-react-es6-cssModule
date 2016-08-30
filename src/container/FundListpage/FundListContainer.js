import { connect } from 'react-redux'

import { browserHistory } from 'react-router'
import fetchJsonp from 'fetch-jsonp'

import FundList from './FundListComponent.js'


const mapDispatchToProps = (dispatch) => {
	return{
		dataInit: () => {
			const result = fetchJsonp('https://fundexh5.eastmoney.com/FundSpecialApi/FundSpecialRankList.ashx?DISCOUNT=1&SYL=SYL_6Y&FundType=0&pageIndex=1&pageSize=10', {jsonpCallback: 'callback'})
			result.then(res => res.json())
			.then(data => {
				dispatch({type:'INIT_FUND', item:{funddata: data.Datas, page: 1, isloading: false}})
			});
		},
		handleRefresh(page) {
			dispatch({type:'TURN_PAGE', item:{funddata: [], page: page, isloading: true}})
			setTimeout(function () {
				const result = fetchJsonp('https://fundexh5.eastmoney.com/FundSpecialApi/FundSpecialRankList.ashx?DISCOUNT=1&SYL=SYL_6Y&FundType=0&pageIndex='+(page+1)+'&pageSize=10', {jsonpCallback: 'callback'})
				result.then(res => res.json())
				.then(data => {
					if (data.ErrCode == 0) {
						dispatch({type:'TURN_PAGE', item:{funddata: data.Datas, page: page+1, isloading: false}})
					} else {
						alert('加载失败！')
					}
				});
			}, 500);
		},
		backHome: () => {
			browserHistory.push(/${index}/);
		}
	}	
}

const mapStateToProps = (state) => {
    return {
        FundData: state.FundData
    }
}

const FundListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FundList)

export default FundListContainer;