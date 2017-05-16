import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Modal from './modal'
import showMsg from "./showMsg";

class Dialog extends Component {
    constructor(props) {
        super(props);
    }

    renderPoral() {
        ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            <Modal {...this.props}>
                {this.props.children}
            </Modal>,
            this.node
        )
    }

    componentDidMount() {
        this.node = document.createElement('div')
        document.body.appendChild(this.node)
        this.renderPoral()
    }

    componentDidUpdate() {
        this.renderPoral()
    }

    componentWillUnmount() {
        document.body.removeChild(this.node)
    }

    render() {        
        return null
    }
}

Dialog.propTypes = {
    onClose: PropTypes.func,
    visible: PropTypes.bool,
    children:PropTypes.node
};

Dialog.defaultProps = {
    visible: false
};


Dialog.showMsg = showMsg
export default Dialog