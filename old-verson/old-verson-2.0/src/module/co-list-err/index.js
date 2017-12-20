import React from 'react';
import style from './listerr.less';

const ListErr = () => (
	<div className={style.content}>
		<div className={style.word}>加载中...</div>
		<div className={style.errtip}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
    </div>
)

export default ListErr


