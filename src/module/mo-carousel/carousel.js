import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GetSlideDirection, setCss3Style } from './method'
import styles from './carousel.less'


class Carousel extends Component {
    constructor(props) {
        super(props)

        // 正显示的元素位置
        this.activeIndex = this.props.activeIndex
        // 单个元素宽度
        this.scaleW = 0
        // 总偏移量
        this.totalX= 0

        // 手指按下时的偏移量
        this.startX= 0
        this.startY= 0
        // 手指移动的偏移量
        this.offsetX = 0
        this.offsetY = 0

        this.startTouch = this.startTouch.bind(this)
        this.moveTouch = this.moveTouch.bind(this)
        this.endTouch = this.endTouch.bind(this)

    }
    
    componentDidMount() {
        const { activeIndex } = this
        this.reset()
        this.scrollTo(activeIndex)
    }

    componentWillReceiveProps(nextProps) {
        const { activeIndex } = this
        const { activeIndex: newActiveIndex } = nextProps
        if(newActiveIndex !== activeIndex) {
            this.scrollTo(newActiveIndex)
        } 
    }

    shouldComponentUpdate(nextProps) {
        const { activeIndex } = this
        const { activeIndex: newActiveIndex } = nextProps
        if(activeIndex !== newActiveIndex) {return true}
        if(this.props.children != nextProps.children ) {return true}

        return true
    }

    reset() {
        requestAnimationFrame(() => {
            const {carouselWarp: { clientWidth} , slideList} = this
            const { children } = slideList
            this.scaleW = clientWidth
            slideList.style.width = `${clientWidth * slideList.children.length}px`
            slideList.style.display = 'none'
            Array.prototype.forEach.call(children, (item)=>{
                item.style.width = clientWidth + 'px'
            })
            slideList.style.display = 'flex'
        })
    }

    scrollTo(index) {
        const { scaleW } = this;
        this.totalX = -index * scaleW
        this.toggleTransition()
        this.moveCarousel(-index * scaleW)
        this.activeIndex = index
    }

    moveCarousel(distance) {
        requestAnimationFrame(()=>{
            setCss3Style(this.slideList, 'transform', 'translateX(' + distance + 'px)')
        })
    }

    toggleTransition() {
        setCss3Style(this.slideList, 'transition', 'transform .2s cubic-bezier(.645,.045,.355,1)')
        setTimeout(()=> {
            setCss3Style(this.slideList, 'transition', 'none')
        }, 200)
    }

    startTouch(event) {
        this.startX = event.targetTouches[0].pageX
        this.startY = event.targetTouches[0].pageY
        this.offsetX = 0
    }

    moveTouch(event) {
        const { onMove } = this.props
        const { pageX, pageY } = event.targetTouches[0]

        if(GetSlideDirection(this.startX, this.startY, pageX, pageY) >= 3){
            event.preventDefault();
            event.stopPropagation();
        }


        const { scaleW, startX, totalX } = this
        const offsetX = pageX - startX

        // 最多移动 80% 距离
        if (Math.abs(offsetX) > scaleW * 0.8) {return}

        this.offsetX = offsetX
        const scrollWidth = offsetX + totalX
        this.moveCarousel(scrollWidth)

        onMove && onMove(scrollWidth)
    }

    endTouch() {
        const { activeIndex, scaleW, offsetX } = this
        const { children } = this.props
        
        // 记录滑动边界，用于判定滑动的类型，超过总长 20% 即判定为移动
        const boundary = scaleW / 5;
        
        if (offsetX > boundary) {
            // 右滑
            if(activeIndex === 0) {
                this.setIndex(0)
                return
            }
            this.setIndex(-1);
        } else if (offsetX < 0 && offsetX < - boundary) {
            // 左滑
            if(activeIndex + 1 >= children.length) {
                this.setIndex(0)
                return
            }
            this.setIndex(+1);
        } else {
            this.setIndex(0);
        }
    }

    setIndex(n) {
        const { scaleW } = this
        const { onChange } = this.props
        const oldActiveIndex = this.activeIndex
        const newActiveIndex = oldActiveIndex + n

        this.activeIndex = newActiveIndex
        this.totalX = -newActiveIndex * scaleW

        this.toggleTransition()
        this.moveCarousel(this.totalX)

        onChange &&  onChange(oldActiveIndex, newActiveIndex)    
    }

    render() {
        return (
                <div 
                    ref = {(n) => this.carouselWarp = n}
                    className={styles.wrap + " " + (this.props.className ? this.props.className : "")}
                    style={{...this.props.style}}
                >
                    <ul
                        ref = {(n) => this.slideList = n}
                        className={styles['slide-list']}
                        onTouchStart={this.startTouch}
                        onTouchMove={this.moveTouch}
                        onTouchEnd={this.endTouch}
                    >
                        {
                            React.Children.map(this.props.children, (slide, i) => 
                                <li key={i} className={styles.slide}>
                                    {React.cloneElement(slide)}
                                </li>
                            )
                        }
                    </ul>
                    
                </div>
        )
    }
}

Carousel.propTypes = {
    activeIndex: PropTypes.number,
    onMove: PropTypes.func,
    onChange: PropTypes.func,
    className: PropTypes.string,
}

Carousel.defaultProps = {
    activeIndex: 0,
}

export default Carousel