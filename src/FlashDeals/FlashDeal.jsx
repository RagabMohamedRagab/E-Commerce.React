import React,{Component} from 'react'
import FlashCard from './FlashCard';
import './Flash.css'
class FlashDeal extends Component{
    render(){
        return(
            <>
               <section className='flash background'>
                   <div className='container'>
                         <div className='heading f_flex'>
                             <i className='fa fa-bolt'></i>
                             <h1>Flash Deals</h1>
                         </div>
                         <FlashCard productItems={this.props.productItems}addToCart={this.props.addToCart}/>
                   </div>
                   
               </section>
            </>
        )
    }
}

export default FlashDeal;