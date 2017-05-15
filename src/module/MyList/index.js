import React from 'react'
import PropTypes from 'prop-types'
import style from './mylist.less';

const ListSingle = ({ index, value }) => {
    return (
        <div className={style.content}>
            <div>{ index }</div> 
            <div>{ value.name }</div>
        </div>
    )
}


const MyList = ({ data }) => {
    return (
        <div className={style.content}>
           {data.map((v, i)=>(
               <ListSingle index={i} value={v} key={i}/>
           ))}
        </div>
    )
}

MyList.propTypes = {
    data: PropTypes.array
}

export default MyList;