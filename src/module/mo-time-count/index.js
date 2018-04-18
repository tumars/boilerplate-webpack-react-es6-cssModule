import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TimeCount extends Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
            isfailure: true
        }
        this.state = this.defaultState
    }
    componentWillUnmount() {
        this.reset()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.gapTime !== this.props.gapTime || nextProps.endDate !== this.props.endDate) {
            this.reset()
            this.runCount(nextProps);
        }
    }
    
    componentDidMount() {
        this.runCount(this.props);
    }

    reset() {
        clearInterval(this.timer)
        this.setState({
            ...this.defaultState
        }) 
    }

    runCount(props) {
        let { onOver } = props;
        let gapTime = this.getGapTime(props);

        if(!gapTime) {
            return
        }

        this.timer = setInterval(() => {
            gapTime = gapTime - 1000;
            if(gapTime <= 0) {
                clearInterval(this.timer)
                this.setState({
                    isfailure: true
                })
                onOver && onOver()
            } 
            this.renderCount(gapTime)
        }, 1000)
    }

    getGapTime(props) {
        let { endDate, startDate, gapTime } = props;
        if(gapTime && gapTime > 0) {
            return gapTime;
        } else {
            if (!endDate || !startDate) {
                this.setState({
                    isfailure: true
                })
                console.warn('missing endDate or startDate props')
                return false
            }

            if(endDate instanceof Date) {
                endDate =  Date.parse(endDate);
            }
            if(startDate instanceof Date) {
                startDate =  Date.parse(startDate);
            }
            
            return (endDate - startDate)
        }
    }

    renderCount(temp) {
        // 天
        var int_day = Math.floor(temp / 86400000)
        temp -= int_day * 86400000;
        // 时
        var int_hour = Math.floor(temp / 3600000)
        temp -= int_hour * 3600000;
        // 分
        var int_minute = Math.floor(temp / 60000)
        temp -= int_minute * 60000;
        // 秒  
        var int_second = Math.floor(temp / 1000)
        // 时分秒为单数时、前面加零 
        if (int_day < 10) {
            int_day = "0" + int_day;
        }
        if (int_hour < 10) {
            int_hour = "0" + int_hour;
        }
        if (int_minute < 10) {
            int_minute = "0" + int_minute;
        }
        if (int_second < 10) {
            int_second = "0" + int_second;
        }

        this.setState({
            day: int_day,
            hour: int_hour,
            minute: int_minute,
            second: int_second,
            isfailure: false
        })
    }

    renderDefault() {
        const { day, hour, minute, second} = this.state;
        return `${day} 天 ${hour} 时 ${minute} 分 ${second}秒`
    }

    renderWithoutDay() {
        let { day, hour, minute, second} = this.state;
        hour =  +(day * 24 + hour);
        hour = hour < 10 ? '0' + hour : hour;

        return `${hour} 时 ${minute} 分 ${second} 秒`
    }

    renderWithoutHour() {
        let { day, hour, minute, second} = this.state;
        minute = +(day * 24 * 60  + hour * 60 + minute);
        minute = minute < 10 ? '0' + minute : minute;

        return `${minute} 分 ${second} 秒`
    }

    render() {
        const { className, showDay, showHour } = this.props;
        return (
            <span className={className}>
                {
                    this.state.isfailure 
                    ? ' - - ' 
                    : showHour 
                        ? showDay
                            ? this.renderDefault()
                            : this.renderWithoutDay()
                        : this.renderWithoutHour()
                }
            </span>
        );
    }
}

TimeCount.propTypes = {
    className: PropTypes.string,
    endDate: PropTypes.any,
    startDate: PropTypes.any,
    gapTime: PropTypes.number,
    showDay: PropTypes.bool,
    showHour:  PropTypes.bool,
    onOver: PropTypes.func
}

TimeCount.defaultProps = {
    endDate: null,
    startDate: null,
    showHour: true,
    showDay: true,
    onOver: () => console.warn('coundown timer was end')
}

export default TimeCount