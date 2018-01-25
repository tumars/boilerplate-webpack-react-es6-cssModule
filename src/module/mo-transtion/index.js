import React from 'react';
import { CSSTransition } from 'react-transition-group'
import './transtion.less'

export const SlideTransition = (props) => (
    <CSSTransition
		{...props}
		timeout={{ enter: 500, exit: 500 }}
		classNames="tj-trans__slide"
	/>
)

export const FadeTransition = (props) => (
    <CSSTransition
		{...props}
		timeout={{ enter: 500, exit: 500 }}
		classNames="tj-trans__fade"
	/>
)

export const SpreadTransition = (props) => (
    <CSSTransition
		{...props}
		timeout={200}
		classNames="tj-trans__spread"
	/>
)


export const PopTransition = (props) => (
    <CSSTransition
		{...props}
		timeout={{ enter: 100, exit: 200 }}
		classNames="tj-trans__pop"
	/>
)
