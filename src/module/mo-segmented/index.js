import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './segmented.less';

var classNames = require('classnames');


class Segmented extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            activeIndex: this.props.activeIndex
        };
        this.handleChange = this.handleChange.bind(this);

        const { tintColor, tintBg } = props

        this.defaultStyle = {
            color: tintColor,
            background: tintBg
        }
        this.activeStyle = {
            color: tintBg,
            background:tintColor
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true
        }
        if(this.props.children !== nextProps.children) {
            return true
        }
        return true
    }

    handleChange(nextIndex) {
        const { activeIndex } = this.state
        if(nextIndex !== activeIndex) {
            this.setState({
                activeIndex: nextIndex
            })
            this.props.onChange && this.props.onChange(activeIndex, nextIndex)
        }
    }

    render() {
        const { activeIndex } = this.state;
        const { values, tintBg, lineColor=tintBg, style, className } = this.props;
        const len = values.length;

        return (
            <div 
                ref={(n) => this.tabContent = n} 
                className={classNames("tj-segmented__content", className)} 
                style={{...style, borderColor: tintBg}}
            >
                {
                    values.map((title, i) => 
                        <div 
                            key={title} 
                            className={
                                classNames('tj-segmented__item', {
                                    'tj-segmented__item--active': activeIndex == i
                                })
                            } 
                            style={
                                Object.assign(
                                    {width: 100/len + "%", borderColor: lineColor}, 
                                    (activeIndex == i ? this.defaultStyle : this.activeStyle))
                            } 
                            onClick={this.handleChange.bind(this, i)}
                        >
                            { title }
                        </div>
                    )
                }
            </div>
        )
    }
}

Segmented.propTypes = {
    activeIndex: PropTypes.number,
    values: PropTypes.array,
    tintColor:  PropTypes.string,
    tintBg:  PropTypes.string,
    onChange: PropTypes.func
}

Segmented.defaultProps = {
    activeIndex: 0,
    tintColor: '#0C037B',
    tintBg: '#fff'
}

export default Segmented