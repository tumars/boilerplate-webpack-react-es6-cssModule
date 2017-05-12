import React from 'react';
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

/*引入页面组件*/
import Home from '../view/home'
import List from '../view/list'

/*引入全局样式*/
import '../styles/reset.less'


const App = () => (
	<div>
		<Provider store={ store }>
			<HashRouter>
				<Switch>
					<Route path={'/home'} component={Home} />
					<Route path={'/list'} component={List} />
				</Switch>
			</HashRouter>
		</Provider>
	</div>
	
) 

export default App