import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from './modal'

let that = null
const container = document.createElement('div')
document.body.appendChild(container)

class ShowM extends Component{
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            content: ''
        }
        that = this
    }
    
    componentWillUnmount() {
        document.removeChild(container)
    }

    render() {
        return(
            <Modal 
                visible={this.state.show}
            >
                <div>{this.state.content}</div>
            </Modal>
        )
    }
}

ReactDOM.render(<ShowM />, container)


export default function showMsg (msg) {
    that.setState({
        show: true,
        content: msg
    })
}