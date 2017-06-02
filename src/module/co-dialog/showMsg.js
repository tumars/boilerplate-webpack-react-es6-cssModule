import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './modal'

export default function showMsg (msg) {

    const container = document.createElement('div')
    document.body.appendChild(container)

    let props = {
            visible: true,
            children: msg 
        };

    const component = React.createElement(Modal, Object.assign(props, {
        willUnmount: () => {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        }
    }));

    ReactDOM.render(component, container);
}