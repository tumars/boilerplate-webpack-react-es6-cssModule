import React from 'react';
import './listloading.less';

const ListLoading = ({className}) => (
	<div className={className}>
		<div className="tj-list-loading__content">
			<div className="tj-list-loading__word">加载中...</div>
			<div className="tj-list-loading__errtip">
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


