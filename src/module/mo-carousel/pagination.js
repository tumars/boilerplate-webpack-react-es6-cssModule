import React, { Component } from 'react'

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
                <div className="tj-carousel__pagination-wrap">
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

                    <div className="tj-carousel__pagination-content">
                        {
                            this.props.children.map((v,i)=> 
                                <div 
                                    key={i} 
                                    className={activeIndex === i ? 'tj-carousel__bullet_active' : 'tj-carousel__bullet'}
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