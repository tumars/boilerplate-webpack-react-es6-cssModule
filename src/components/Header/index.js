import React from 'react';
import style from './style.less';

const Header = React.createClass({

	render: function() {
		return (
			<div className={style.header}>
				<h2>I'm Header!</h2>
			</div>
		);
	}
});

export default Header;