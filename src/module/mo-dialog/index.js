import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from './modal'

function alert(msg, props) {
    props = {
        msg,
        visible: true,
        ...props
    }
    return next(props)
}


function next(props) {
    const div = document.createElement('div')
    document.body.appendChild(div)

    if(props.lockScroll != false) {
        document.body.style.setProperty('overflow', 'hidden')
    }

    const component = React.createElement(Modal, Object.assign({}, props, {
        onClose: () => {
            setTimeout(()=>{
                ReactDOM.unmountComponentAtNode(div)
                document.body.removeChild(div)
                document.body.style.removeProperty('overflow')
            }, 200)
            
            
            if (props.onClose instanceof Function) {
                props.onClose()
            }
        }
    }))

    ReactDOM.render(component, div)
}



const modalRoot = document.body;

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    static alert = alert

    renderPoral() {
        const props = this.props
        return React.createElement(Modal, Object.assign({}, props, {
            onClose: () => {
                setTimeout(()=>{
                    document.body.style.removeProperty('overflow')
                }, 200)

                if (props.onClose instanceof Function) {
                    props.onClose()
                } 
            }
        }))
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {        
        return ReactDOM.createPortal(
            this.renderPoral(),
            this.el,
        );
    }
}

export default Dialog