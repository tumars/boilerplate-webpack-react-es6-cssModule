import React from 'react';
import style from './header.less';

const Header = React.createClass({

	render: function() {
		return (
			<div className={style.title}>
				<h2>I'm Header</h2>
			</div>
		);
	}
});

export default Header;