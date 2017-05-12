import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import co from 'co'
import style from './verify.less'

class VerifyC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isTiming: false,
            time: 60,
            tip: null,
            ismount: true
        }
        this.cleartip = this.cleartip.bind(this)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    cleartip() {
        const prop = this.props
        this.setState({
            tip: null
        })
        prop.dispatch({type: 'FIX_USER_INFO', item:{verifyTip: null}})
    }

    sendClick() {
        const _that = this
        const prop =  this.props

        this.cleartip()

        const mobile = this.PhoneInput.value
        if(!co.verifyTel(mobile)) {
            _that.setState({
                tip: '请输入正确手机号'
            })
            return false
        }

        prop.handleSend(mobile)

        let t = prop.time
        _that.setState({
            isTiming: true
        })
        _that.timer = setInterval(function(){
            t = t-1
            _that.setState({
                time: t
            })
            if (t==0 || !_that.state.ismount) {
                clearInterval(_that.timer)
                _that.setState({
                    isTiming: false,
                    time: _that.props.time
                })
            }
        }, 1000)
        // console.log(prop.time) 
    }

    confirmClick() {
        const _that = this
        const prop =  this.props

        this.cleartip()

        const mobile = this.PhoneInput.value
        if(!co.verifyTel(mobile)) {
            _that.setState({
                tip: '请输入正确手机号'
            })
            return false
        }

        const valid = this.ValidInput.value
        prop.handleConfirm(mobile, valid)
    }

    render() {
        const { verifyTip } = this.props
        return (
            <div className={style.content}>
                <input type="tel" className={style.mobile_input} ref={(input)=>{this.PhoneInput = input}} onFocus={() => this.cleartip()}  name="mobile" maxLength="11" placeholder="请输入手机号码" />
                <div className={style.validbox} id="Codes">
                    <section>
                        <input type="text" ref={(input)=>{this.ValidInput = input}} onFocus={() => this.cleartip()} maxLength="4" placeholder="输入验证码" />
                    </section>
                    <section>
                        {this.state.isTiming ? (<span style={{background: "#ccc",color:"#fff",fontSize:"14px"}}>{this.state.time}s后重试</span>) : (<span onClick={() => this.sendClick()}>获取</span>)}
                    </section>
                </div>
                <div className={style.tip}>{this.state.tip}{verifyTip}</div>
                <div className={style.btn} onClick={() => this.confirmClick()}>领取礼包</div>
            </div>
        )
    }
}

VerifyC.propTypes = {
    verifyTip: PropTypes.string,
    time: PropTypes.string,
    handleSend: PropTypes.func.isRequired,
    handleConfirm:  PropTypes.func.isRequired
}

VerifyC.defaultProps = {
    time: '60',
    verifyTip: ''
}

const mapStateToProps = (state) => {
    return {
        time: state.UserInfo.waittime,
        verifyTip: state.UserInfo.verifyTip
    }
}

const Verify = connect(
    mapStateToProps
)(VerifyC)

export default Verify