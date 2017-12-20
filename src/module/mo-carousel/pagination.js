import React, { Component } from 'react'
import styles from './carousel.less'

const PaginationDecorator = (Carousel) =>(
    class Pagination extends Component {
        constructor(props) {
            super(props)
            this.state =  {
                activeIndex: this.props.activeIndex || 0
            }
        }

        handleTabClick(i) {
            const { activeIndex } = this.state
            
            if(i !== activeIndex) {
                this.setState({
                    activeIndex: i
                })
            }
        }
    
        render() {
            const  { activeIndex } = this.state
            return (
                <div className={styles['pagination-wrap']}>
                    <Carousel 
                        {...this.props}
                        activeIndex={activeIndex}
                        onChange={(perv, next)=>{
                            this.setState({activeIndex:next})
                            this.props.onChange && this.props.onChange(perv, next)
                        }}
                    >
                        {this.props.children}
                    </Carousel>

                    <div className={styles.pagination}>
                        {
                            this.props.children.map((v,i)=> 
                                <div 
                                    key={i} 
                                    className={styles[activeIndex === i ? 'bullet-active' : 'bullet']}
                                    onClick={()=>this.handleTabClick(i)}
                                >
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        }
    }
)


export default PaginationDecorator