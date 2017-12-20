import React from 'react';
import { Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import store from '../store'
import createHistory from 'history/createHashHistory'


/*引入页面组件*/
import Home from '../view/home'
import List from '../view/list'

/*引入路由切换样式*/
import style from './router.less'

/*引入全局样式*/
import '../styles/reset.less'

/*定义 history*/
const CustomHistory = createHistory()


/* 如果想要页面过渡效果，请参考下面 Layout 与 App 组件写法 */
/* 更多了解请查阅 react-router 官方示例文档 https://reacttraining.com/react-router/web/example/animated-transitions */
const Layout = (props) => {
	let route

	const page = (content) => (
		<div className={style.fill} style={{height:window.innerHeight+'px'}}>
			{content}
		</div>
	)
	switch(props.match.params.path) {
		case 'home':
			route = page(<Home {...props}/>)
			break
		case 'list':
			route = page(<List {...props}/>)
			break
		default:
			route = <div className={style.notfund}>Oops！404啦！</div>
	}
	return route
}

const App = () => (
	<Provider store={ store }>
		<HashRouter history={CustomHistory}>
			<Route path="/" render={({ location, history }) => (
				<div>
					<ReactCSSTransitionGroup 
						component='div'
						transitionName={{
							enter: style.slideEnter,
							enterActive: style.slideEnterActive,
							leave: style.slideLeave,
							leaveActive: style.slideLeaveActive
						}} 
						transitionEnterTimeout={500} 
						transitionLeaveTimeout={500}
					>
						<Route
							history={history}
							location={location}
							key={location.pathname}
							path="/:path"
							component={Layout}
						/>
					</ReactCSSTransitionGroup>
				</div>
			)}/>
		</HashRouter>
	</Provider>
) 

/*如果不需要页面过渡效果，请使用下面更简单易懂的写法*/
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