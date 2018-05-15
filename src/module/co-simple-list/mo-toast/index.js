import React from 'react'
import ReactDOM from 'react-dom';

import Toast from './Toast';

export default function Message(props = {}, option) {
	const div = document.createElement('div');

	document.body.appendChild(div);

	if (typeof props === 'string') {
		props = {
			content: props
		};
	}	
	if (option) {
		props = {...props, ...option}
	}	
	const component = React.createElement(Toast, Object.assign(props, {
		willUnmount: () => {
			ReactDOM.unmountComponentAtNode(div);
			document.body.removeChild(div);	
			if (props.onClose instanceof Function) {
				props.onClose();
			}
		}
	}));

	ReactDOM.render(component, div);
} 

/* eslint-disable */
['text', 'success', 'warning', 'info', 'error', 'loading'].forEach(type => {
  	Message[type] = (options = {}) => {
    	return Message(options, type);
  	};
});
/* eslint-enable */
