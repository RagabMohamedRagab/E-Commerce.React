import React,{Component} from 'react'
import SlideCard from './SlideCard';


class Slider extends Component{
    render(){
        return(
            <>
             <section className='homeSilde contentWidth'>
                    <div className='container'>
                         <SlideCard/>
                    </div>
               </section>
            </>
        )
    }
}
export default Slider;