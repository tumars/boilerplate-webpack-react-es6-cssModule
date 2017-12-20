import React from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import style from './mylist.less'

const ListSingle = ({ index, value }) => {
    return (
            <div className={style.single}>
                <div>{ index + 1 }</div> 
                <div>{ value.name }</div>
            </div>
    )
}


const MyList = ({ data }) => {
    return (
        <div className={style.list}>
            <ReactCSSTransitionGroup 
                component='div'
                transitionName={{
                    enter: style.slideEnter,
                    enterActive: style.slideEnterActive,
                    leave: style.slideLeave,
                    leaveActive: style.slideLeaveActive
                }} 
                transitionEnterTimeout={200} 
                transitionLeaveTimeout={200}
            >
                {data.map((v, i)=>(
                    <ListSingle index={i} value={v} key={i}/>
                ))}
            </ReactCSSTransitionGroup>
        </div>
    )
}

MyList.propTypes = {
    data: PropTypes.array
}

export default MyList;