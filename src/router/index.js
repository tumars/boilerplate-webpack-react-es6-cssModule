import React from 'react';
import { Route } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { TransitionGroup  } from 'react-transition-group'
import { SlideTransition } from 'mo-transtion'
import store from '../store'

/*引入页面组件*/
import Home from '../view/home'
import List from '../view/list'
import Miao from '../view/miao'

/*引入路由切换样式*/
import style from './router.less'

/*引入全局样式*/
import '../styles/reset.less'

/* 做 vw vh 的降级处理 */
// require('viewport-units-buggyfill').init();


/*定义路由配置数组*/
const routes_config = [
	{
		path: '/',
		component: Home,
		isExact: true
	}, {
		path: '/list',
		component: List
	}, {
		path: '/miao',
		component: Miao
	}
]


const App = () => (
	<Provider store={ store }>
		<HashRouter>
			<Route render={({ location }) => 
				<TransitionGroup component="main" >
					<SlideTransition key={location.pathname}>
						<section className={style.fill}>
							<Switch location={location}>
								{
									routes_config.map(config=>
										<Route key={config.path} path={config.path} exact={config.isExact} component={config.component} />
									)
								}
							</Switch>
						</section>
					</SlideTransition>
				</TransitionGroup>
			}/>
		</HashRouter>
	</Provider>
) 


/*如果不需要页面过渡效果，参考下面更简单易懂的写法*/
/*const App = () => (
	<Provider store={ store }>
		<HashRouter history={CustomHistory}>
			<Switch> // import { Switch } from 'react-router'
				<Route exact path={'/home'} component={Home} />
				<Route path={'/list'} component={List} />
			</Switch>
		</HashRouter>
	</Provider>
) */


export default App