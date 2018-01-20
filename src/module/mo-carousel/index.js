import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from "./carousel"
import PaginationDecorator from "./pagination"

const PaginationCarousel = PaginationDecorator(Carousel);

class Wraper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { showDot } = this.props
        if(showDot) {
            return <PaginationCarousel {...this.props}/>
        }
        
        return (
            <Carousel {...this.props}/>
        )
    }
}

Carousel.propTypes = {
    showDot: PropTypes.bool
}


export default Wraper