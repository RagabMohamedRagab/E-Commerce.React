import React,{Component} from 'react'

import Home from '../MainPages/Home.jsx'
import FlashDeal from '../FlashDeals/FlashDeal.jsx';
import TopCate from '../TopCart/TopCate.jsx';
import NewArrivals from '../NewArrivals/NewArrivals.jsx'
import Discount from '../Discount/Discount.jsx'
import Shop from '../Shops/Shop.jsx'
import Annocument from '../Annocument/Annocument.jsx'
import Wrapper from '../Wrapper/Wrapper.jsx'

class Pages extends Component{
    render(){
        return(
            <>
          <Home/>
          <FlashDeal productItems={this.props.productItems} addToCart={this.props.addToCart}/>
           <TopCate/>
           <NewArrivals/>
           <Discount/>
            <Shop shopItems={this.props.shopItems} addToCart={this.props.addToCart}/>
           <Annocument/>
           <Wrapper/>
       
            </>
        )
    }
}
export default Pages;