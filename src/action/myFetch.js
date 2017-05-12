import store from '../store'
import co from 'co'
import { ErrorFetchAction } from '../action'

export const myFetch = ({reqdata, url, method, success}) => {
	let USER = store.getState().UserInfo
	let activeid = USER.activeID
	let obj = {activeid, ...reqdata || ''}
	let data = co.setObjToQue(obj)
	let result = fetch(USER.Server+ url + '?' +  data, {
		method: method || 'GET', 
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
	return dispatch => {
		return result.then(res => {
			if (res.ok) {
				res.json().then(res => {
					dispatch(success(res))
				})
			} else {
				dispatch(ErrorFetchAction())
			}
		}).catch(e => {
			dispatch(ErrorFetchAction())
			console.warn("Oops, error", e)
		});
	}
}