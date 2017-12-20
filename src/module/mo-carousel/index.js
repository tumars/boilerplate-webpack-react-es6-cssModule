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
        const { isDot } = this.props
        if(isDot) {
            return <PaginationCarousel {...this.props}/>
        }
        
        return (
            <Carousel {...this.props}/>
        )
    }
}

Carousel.propTypes = {
    isDot: PropTypes.bool
}


export default Wraper

// export default Carousel