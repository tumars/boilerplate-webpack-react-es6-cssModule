import React from 'react';
import style from './listerr.less';

const ListErr = ({className}) => (
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

export default ListErr


