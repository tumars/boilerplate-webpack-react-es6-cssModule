import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mask, Content } from './modal-modules'

class Modal extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            isShow: false
        };

        this.enter = this.enter.bind(this)
        this.leave = this.leave.bind(this)
        this.handleMaskClick = this.handleMaskClick.bind(this)
    }

    componentDidMount() {
        this.props.visible && this.enter();
    }
    
    componentWillReceiveProps(nextProps) {
        console.log(123, nextProps)
        if (nextProps.visible && !this.state.isShow) {
            this.enter()
        } else if(!nextProps.visible && this.state.isShow) {
            this.leave()
        }
    }

    shouldComponentUpdate(nextProps) {
        if(!nextProps.visible && !this.isShow) {
            return false
        } else {
            return true
        }
    }

    enter() {
        this.setState({isShow: true})
    }

    leave() {
        this.setState({isShow: false});
        this.props.onClose && this.props.onClose()
    }

    handleMaskClick() {
        this.props.closeOnClickModal && this.leave()
    }

    render() {
        const {msg, children, showCloseIcon} = this.props
        const { isShow } = this.state

        return (
            <div>
                <Mask visible={isShow} onClick={this.handleMaskClick} />
                <Content 
                    visible={isShow} 
                    msg={msg} 
                    showCloseIcon={showCloseIcon}
                    onCloseIcon={this.leave}
                >
                    {children}
                </Content>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func,
    visible: PropTypes.bool,
    children:PropTypes.node,
    msg: PropTypes.node,
    showCloseIcon: PropTypes.bool,
    closeOnClickModal: PropTypes.bool
};

Modal.defaultProps = {
    visible: false,
    showCloseIcon: true,
    closeOnClickModal: false
};

export default Modal;