import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup } from 'react-transition-group'
import { SpreadTransition } from '../mo-transtion'
import style from './list.less'

const Row = ({ value }) => (
    <div className={style.single}>
        <div>{ value[0] }</div> 
        <div>{ value[1] }</div>
    </div>
)

const MyList = ({ data }) => {
    const items = data.map(item => (
        <SpreadTransition key={item[0]}>
            <Row value={item} />
        </SpreadTransition>
    ))
    return (
        <div className={style.list}>
            <TransitionGroup>
                {items}
            </TransitionGroup>
        </div>
    )
}

MyList.propTypes = {
    data: PropTypes.array
}

export default MyList;