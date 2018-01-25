import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import { FadeTransition, PopTransition } from '../mo-transtion'
import style from './modal.less';

// 控制显示
const View = ({ isshow, className, style, children, onClick}) => {
    return (
        <div
            className={className}
            style={Object.assign({}, style, {display: isshow ? 'block' : 'none'})}
            onClick={onClick}
        >
            {children}
        </div>
    )   
}


//关闭按钮
const CloseIcon = ({visible, onClick}) => (
    <View isshow={visible} className="tj-dialog__close" onClick={onClick}>
        <svg className={style.icon} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <path d="M902.741333 816.213333l-306.005333-307.2 297.984-303.957333c18.858667-18.858667 18.858667-49.322667 0-68.181333s-36.010667-18.858667-54.869333 0L532.394667 444.416l-306.346667-307.541333c-18.858667-18.858667-49.322667-18.858667-68.181333 0s-18.858667 49.322667 0 68.181333L464.810667 512 157.952 818.944c-18.858667 18.858667-18.858667 49.322667 0 68.181333s49.322667 18.858667 68.181333 0L529.92 577.194667l309.930667 309.930667c18.858667 18.858667 44.032 16.128 62.805333-2.645333S921.6 835.072 902.741333 816.213333z"></path>
        </svg>
    </View>
)


// 背景透明层
const Mask = ({visible, onClick}) => (
    <TransitionGroup>
        <FadeTransition key={visible}>
            <View 
                isshow={visible}
                className="tj-dialog__dyy" 
                onClick={onClick}
            > </View>
        </FadeTransition>
    </TransitionGroup>
)


// 内容主体
const Content = ({visible, msg, children, showCloseIcon, onCloseIcon}) => (
    <TransitionGroup>
        <PopTransition key={visible}>
            <View isshow={visible} className="tj-dialog__wrapper">        
                <div className="tj-dialog__default">
                    {children}
                    {msg}
                </div>
                <CloseIcon visible={showCloseIcon} onClick={onCloseIcon}/>
            </View>
        </PopTransition>
    </TransitionGroup>
)



export {
    Mask,
    Content
}
