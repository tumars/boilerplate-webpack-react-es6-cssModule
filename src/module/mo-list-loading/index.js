import React from 'react';
import style from './listloading.less';

const ListLoading = ({className}) => (
	<div className={className}>
		<div className={style.content}>
			<div className={style.word}>加载中...</div>
			<div className={style.errtip}>
				<div><span></span></div>
				<div><span></span></div>
				<div><span></span></div>
				<div><span></span></div>
				<div><span></span></div>
			</div>
		</div>
	</div>
)

export default ListLoading


