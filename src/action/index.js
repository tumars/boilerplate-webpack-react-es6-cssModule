export const ErrorFetchAction = (massage) => {
	const result = {
		type: 'FETCH_USER_POST',
		status: 'error',
		item: {
			PopName:'MassagePop',
			MassagePopContent: massage || "网络不给力，请稍后再试"
		}
	}
	return result
}

export const successFetchAction = (para) => {
	return dispatch => {
		dispatch({type: 'FETCH_USER_POST',status: 'success', item:{...para}})
	}
}

export const FixUserAction = (para) => {
	return {type: 'FIX_USER_INFO', item:{...para}}
}

export const loginFromAction = (para) => {
	return {type: 'FIX_USER_INFO', item:{loginFrom: para}}
}


export const showPopAction = (name) => {
	return {
		type: 'FETCH_USER_POST',
		status: 'success',
		item: {
			isShowDialog: true,
			PopName: name
		}
	}
}
export const closePopAction = () => {
	return {type: 'HIDE_DIALOG'}
}