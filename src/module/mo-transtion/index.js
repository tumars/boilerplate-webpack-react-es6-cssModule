import React from 'react';
import { CSSTransition } from 'react-transition-group'
import style from './transtion.less'

export const SlideTransition = (props) => (
    <CSSTransition
		{...props}
		timeout={{ enter: 500, exit: 500 }}
		classNames={{
			appear: style['slide-enter'],
			appearActive: style['slide-appear-active'],
			enter: style['slide-enter'],
			enterActive: style['slide-appear-active'],
			exit: style['slide-exit'],
			exitActive: style['slide-exit-active']
		}}
	/>
)

export const FadeTransition = (props) => (
    <CSSTransition
		{...props}
		timeout={{ enter: 500, exit: 500 }}
		classNames={{
			appear: style['fade-enter'],
			appearActive: style['fade-appear-active'],
			enter: style['fade-enter'],
			enterActive: style['fade-appear-active'],
			exit: style['fade-exit'],
			exitActive: style['fade-exit-active']
		}}
	/>
)

export const SpreadTransition = (props) => (
    <CSSTransition
		{...props}
		timeout={200}
		classNames={{
			enter: style['spread-enter'],
			enterActive: style['spread-enter-active'],
			exit: style['spread-exit'],
			exitActive: style['spread-exit-active']
		}}
	/>
)


export const PopTransition = (props) => (
    <CSSTransition
		{...props}
		timeout={{ enter: 100, exit: 200 }}
		classNames={{
			enter: style['pop-enter'],
			enterActive: style['pop-enter-active'],
			exit: style['pop-exit'],
			exitActive: style['pop-exit-active']
		}}
	/>
)






