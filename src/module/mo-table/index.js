import React from 'react'
import PropTypes from 'prop-types'
import './table.less';


const TjTable = ({columns, dataSource, cLassName}) => (
    <div className={cLassName}>
        <table className="tj-table__content ">
            <tbody>
                <tr  className="tj-table__row">
                    {
                        columns.map(v=>
                            <th className="tj-table__col--top" key={v.dataIndex}>{v.title}</th>
                        )
                    }
                </tr>
            {
                dataSource.map(rowItem=>
                    <tr className="tj-table__row" key={rowItem.key}>
                        {
                            columns.map(colItem=>
                                <td className="tj-table__col" key={colItem.dataIndex}>{rowItem[colItem.dataIndex]}</td>
                            )
                        }
                    </tr>
                )
            }
            </tbody>
        </table>
    </div>
)


TjTable.propTypes = {
    dataSource : PropTypes.arrayOf(PropTypes.object),
    columns : PropTypes.arrayOf(PropTypes.object)
}

TjTable.defaultProps = {
    dataSource: [
        {key: 1, n1: '某某某', n2: '某某某', n3: '某某某'},
        {key: 2, n1: '某某某', n2: '某某某', n3: '某某某'},
        {key: 3, n1: '某某某', n2: '某某某', n3: '某某某'},
        {key: 4, n1: '某某某', n2: '某某某', n3: '某某某'},
    ],
    columns:[
        {title:'属性1', dataIndex:'n1'},
        {title:'属性2', dataIndex:'n2'},
        {title:'属性3', dataIndex:'n3'},
    ]
}

export default TjTable