import React from 'react'
import CSSModules from 'react-css-modules'
import SimpleList from 'co-simple-list'
import ListLoading from 'mo-list-loading'
import Button from 'mo-button'
import Spin from 'mo-spin'
import style from './list-tabs.less'


let Table = ({data:{ list, total, now, isFetching}, onMore}) => {
	return (
		<div styleName="panel">
			{
				Array.isArray(list) && list.length > 0
					?	<div>
							<SimpleList data={list} />
							{
								now < total &&
								<Button type="primary" onClick={()=>onMore(now + 1)}>
									<Spin styleName="spin" visible={isFetching}/>
									查看更多
									<span styleName="pagina">{now}/{total} 页</span>
								</Button>
							}
						</div>
					:	<ListLoading />
			}
		</div>
	)
}


export default CSSModules(Table, style)
