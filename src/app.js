import React from 'react';
import ReactDOM from 'react-dom';
import App from './router';
import { AppContainer } from 'react-hot-loader';

if(process.env.NODE_ENV === 'development') {
    const render = (Component) => {
		ReactDOM.render(
			<AppContainer>
				<Component/>
			</AppContainer>,
		document.getElementById('root'));
	};

	render(App);

	if (module.hot) {
		module.hot.accept('./router', () => {
			render(App)
		});
	}
} else {
	ReactDOM.render(<App />, document.getElementById('root'));
}





