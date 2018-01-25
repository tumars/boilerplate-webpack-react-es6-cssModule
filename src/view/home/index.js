import React from 'react'
import { connect } from 'react-redux'
import Dialog from 'mo-dialog'
import HomeComponent from './home-component.js'

const mapDispatchToProps = (dispatch, props) => {
	return {
		initData() {
			console.log('init index')
		},
		goListPage() {
			props.history.push('/list')
		},
		goMiaoPage() {
			props.history.push('/miao')
		},
		openDialog() {
			Dialog.alert(<p>Hello from the <b style={{color:"#f496ce"}}>Moon~</b></p>) 
		}
	}	
}
	
const mapStateToProps = (state) => {
    return {
		...state.HomeReducer
    }
}


const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeComponent)

export default Home;