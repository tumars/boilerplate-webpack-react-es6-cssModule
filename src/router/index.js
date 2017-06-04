import React from 'react';
import { Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import store from '../store'

/*引入页面组件*/
import Home from '../view/home'
import List from '../view/list'

/*引入路由切换样式*/
import style from './router.less'

/*引入全局样式*/
import '../styles/reset.less'


/* 如果想要页面过渡效果，请参考下面 Layout 与 App 组件写法 */
/* 或查阅 react-router 官方示例文档 https://reacttraining.com/react-router/web/example/animated-transitions */
const page = (content) => (
		<div className={style.fill} style={{height:window.innerHeight+'px'}}>
			{content}
		</div>
	)

const Layout = ({match: { params } }) => {
	let route
	console.log(params)
	switch(params.path) {
		case 'home':
			route = page(<Home/>)
			break
		case 'list':
			route = page(<List/>)
			break
		default:
			route = <div className={style.notfund}>Oops！404啦！</div>
	}
	return route
}

const App = () => (
	<Provider store={ store }>
		<HashRouter>
			<Route path="/" render={({ location }) => (
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
		<HashRouter>
			<Switch> // import { Switch } from 'react-router'
				<Route exact path={'/'} component={Home} />
				<Route path={'/list'} component={List} />
			</Switch>
		</HashRouter>
	</Provider>
) */


export default App