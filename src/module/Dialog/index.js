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
        const confirmBox = this.props.isConfirm ? (
                <div>
                    <div className={style.confirmbox}>
                        <a href="javascript:void(0)" onClick={this.props.onConfirm}>ok</a>
                    </div>
                </div>
            ) : null
        const title = <h2 className={style.title}>{this.props.title}</h2>
        const InnerContent = this.state.isShow ? (
                <div>
                    <div className={style.box}>
                        <div className={style.closeicon} onClick={this.props.onClose}></div>
                        {title}
                        {this.props.children}
                        {confirmBox}
                    </div>
                </div>
            ) : 
            null
        
        return (
            <div>
                <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                {mask}
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup transitionName="slideTop" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                    {InnerContent}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Dialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func,
    visible: PropTypes.bool,
    title:PropTypes.node,
    children:PropTypes.node,
    isConfirm: PropTypes.bool
};

Dialog.defaultProps = {
    visible: false,
    title: null,
    children: null,
    isConfirm: false
};

export default Dialog;