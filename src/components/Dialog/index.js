import React, { PropTypes,Component } from 'react';

import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'

import style from './dialog.less';


class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false
        };
    }

    componentDidMount() {
        if (this.props.visible) {
            this.enter();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.visible && nextProps.visible) {
            this.enter();
        } else if (this.props.visible && !nextProps.visible) {
            this.leave();
        }
    }

    enter() {
        this.setState({
            isShow: true
        })
    }

    leave() {
        this.setState({
            isShow: false
        });
    }

    render() {
        const mask = this.state.isShow ? <div className={style.dyy} onClick={this.props.onClose}> </div> : null
        const title = <h2 className={style.title}>{this.props.title}</h2>
        const InnerContent = this.state.isShow ? (
                <div>
                    <div className={style.box}>
                        <div className={style.closeicon} onClick={this.props.onClose}></div>
                        {title}
                        {this.props.children}
                    </div>
                </div>
            ) : 
            null
        
        return (
            <div>
                <ReactCSSTransitionGroup transitionName="fade" >
                {mask}
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup transitionName="slideTop" >
                    {InnerContent}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Dialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.bool,
    title:React.PropTypes.node,
    children:React.PropTypes.node
};

Dialog.defaultProps = {
    visible: false,
    title: null,
    children: null
};

export default Dialog;