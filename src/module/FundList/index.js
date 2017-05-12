import React, { PropTypes } from 'react';
import style from './fundlist.less';


const SingleFund = ({env, value}) => {
    let DETAILURL = env == 'ttjj' ? 
                    'http://ttjj-funddetail/?name=' + value.SHORTNAME + '&id=' + value.FCODE :
                    'http://d.eastmoney.cn/fund_xz.aspx?t=shichang'
    let BUYURL = env == 'ttjj' ? 
                'http://ttjj-normal-buy/?name=' + value.SHORTNAME + '&id=' + value.FCODE :
                'http://d.eastmoney.cn/fund_xz.aspx?t=shichang'

    const handleBuyClick = (e) => {
        e.preventDefault()
        switch(env) {
            case 'ttjj':
                location.href = e.target.href
                break;
            default:
                location.href =  e.target.href
        }
    }

    const handleDetailClick = (e) => {
        e.preventDefault()
        switch(env) {
            case 'ttjj':
                location.href = e.target.href
                break;
            default:
                location.href =  e.target.href
        }
    }

    return (
        <li>
            <div className={style.head}>
                <h2><a className={style.fund_detail} href={ DETAILURL } onClick={handleDetailClick}>{ value.SHORTNAME }{/*<small>（{ value.FCODE }）</small>*/}</a></h2>
                <p><span>{ value.MINSG }</span>元起购<i></i></p>
            </div>
            <div className={style.body}>
                <div className={style.left}>
                    <h3>近3月</h3>
                    <p className={!(value.SYL_3Y < 0) ? style.red : style.green}> { value.SYL_3Y.toFixed(2) }% </p>
                </div>
                <div className={style.mid}>
                    <h3>购买手续费</h3>
                    <p>
                        <del>{ value.SOURCERATE }</del>&nbsp;
                        <span>{ value.RATE }</span>
                    </p>
                </div>
                <div className={style.right}>
                    <a href={ BUYURL } className={style.fund_buy} onClick={handleBuyClick}>购买</a>
                </div>
            </div>
        </li>
    )
}

SingleFund.propTypes = {
    env: PropTypes.string,
    value: PropTypes.object.isRequired
}


const FundList = ({env, funddata}) => {
    const handleClick = (e) => {
        e.preventDefault()
        switch(env) {
            case 'ttjj':
                var href = "https://fundsc.eastmoney.com/webapp/2016/zhe1hd/app.html?isin=ttjj"
                location.href = 'emfundapp:gonewpage({"oldwinrelease":false,"url":"' + href + '"})'
                break
            default :
                location.href = 'http://d.eastmoney.cn/fund_xz.aspx?t=shichang'
        }
    }

    const errtip = (
        <div>出错了！</div>
    )

    const list = funddata ? (
        <div className={style.fund_box}>
            <ul>
                {funddata.map((value, index) =>
                 <SingleFund
                    env={env}
                    value={value}
                    key={index}
                 />)}
            </ul>
            <a href="#" className={style.seemore} onClick={handleClick}>更多&gt;</a>
            <div className={style.funds_info}>
                <p>数据来源：东方财富Choice 银河证券<br />截止日期：{funddata[0].FSRQ}</p>
            </div>
        </div>
    ) : errtip

    

    return (
        <div>
            { list }
        </div>
    )
}

FundList.propTypes = {
    env: PropTypes.string,
    funddata: PropTypes.array
}

export default FundList;