import React,{Component}from 'react'
import "font-awesome/css/font-awesome.min.css";
import './Header.css'
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';
class Header extends Component{
   render(){
    return(
        <>
           <Head/>
           <Search cartItem={this.props.cartItem}/>
           <Navbar/>
        </>
    )
   }
 }
 export default Header;