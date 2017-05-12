import React from 'react';
import TabSwitch from '../TabSwitch'

const useTabSwitch = () => {
	const c1 = (<div>我的标签一的内容</div>)
	const c2 = (<div>我的标签二的内容</div>)
	const c3 = (<div>我的标签三的内容</div>)
	return (
		<div>
			<TabSwitch
				showTab={1} 
				title={['标签一','标签二']}
				content={[c1, c2]}
			/>
			<br />
			<TabSwitch 
				showTab={2} 
				title={['标签一','标签二','标签三']}
				content={[c1, c2, c3]}
			/>
		</div>
		
	) 
}

export default useTabSwitch 