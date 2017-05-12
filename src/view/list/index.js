import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import style from './list.less'

class ListComponent extends Component {
	constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
	render() {
		const { helloText, hanldeGoList } = this.props
		return (
			<div className={style.wrap}>
				{helloText}
				<div onClick={()=>hanldeGoList()}>see list</div>
				<div onClick={()=>hanldeGoList()}>see list</div>
			</div>
		)
	}
}

ListComponent.propTypes = {
	helloText: PropTypes.string,
	hanldeGoList: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        helloText: state.helloText
    }
}

const List = connect(
	mapStateToProps
)(ListComponent)

export default List