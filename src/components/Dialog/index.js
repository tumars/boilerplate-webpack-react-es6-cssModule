import React, { PropTypes,Component } from 'react';

import style from './dialog.less';

const propTypes = {
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.bool,
    showMask: PropTypes.bool,
    showCloseButton: PropTypes.bool,

    title:React.PropTypes.node,
    content:React.PropTypes.node
}

const defaultProps = {
    visible: false,
    showMask: true,
    showCloseButton: true,

    title: null,
    content: null
}

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
        const mask = this.props.showMask ? <div className={style.dyy} onClick={this.props.onClose}> </div> : null
        const LocalStyle = {
            display: this.state.isShow ? 'block' : 'none'
        }

        const title = <h2 className={style.title}>{this.props.title}</h2>
        return (
            <div style={LocalStyle}>
                {mask}
                <div className={style.box}>
                    {title}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;