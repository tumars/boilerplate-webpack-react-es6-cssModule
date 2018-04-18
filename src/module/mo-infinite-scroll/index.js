import React, { Component } from 'react';
var classNames = require('classnames')

class InfiniteScroll extends Component {
    constructor(props) {
		super(props)
		this.state = {
            isLoading: false
        }
    }
    componentDidMount() {
        const { onLoadMore } = this.props;
        const handleLoadError = () =>{ alert('error') }
        const handleLoadStart = () => {this.setState({isLoading: true})}
        const handleLoadFinish = () => {this.setState({isLoading: false})}
        
        this.myscroll.addEventListener("scroll", () => {
            const { scrollTop , clientHeight, scrollHeight } =  this.myscroll;
            const isCatchBottom = scrollTop + clientHeight >=  scrollHeight;
            console.log(isCatchBottom)
            if (isCatchBottom) {
                handleLoadStart();
                onLoadMore()
                    .catch(handleLoadError)
                    .finally(handleLoadFinish);
            }
        });
    }
    render() {
		const { isLoading } = this.state;
		const { height = '420px', loader, className, style } = this.props;
		
        return (
            <ul 
                ref={n=>this.myscroll = n}
                className={classNames(className)}
                style={{ height, overflow: "auto", ...style }}
            >
                {this.props.children}
                {loader || isLoading && <p>loading...</p>}
            </ul>
        )
    }
}


export default InfiniteScroll