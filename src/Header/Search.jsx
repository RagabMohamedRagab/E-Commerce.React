import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../Asset/logo.svg'
class Search extends Component{
    render(){
        window.addEventListener('scroll', function(event) {
            const search=document.querySelector(".search");
            search.classList.toggle("active",window.scrollY>100);
          });
      
        return(
            <>
             <section className='search'>
                <div className='container c_flex'>
                    <div className='logo width'>
                        <img src={logo}alt='Logo'/>
                    </div>
                    <div className='search-box f_flex'>
                        <i className='fa fa-search'></i>
                        <input type='text' placeholder='Search here and hit enter'/>
                        <span>All Categories</span>
                    </div>
                    <div className='icon f_flex width'>
                        <i className='fa fa-user icon-circle'></i>
                        <div className='cart'>
                            <Link to="/cart">
                                <i className='fa fa-shopping-bag icon-circle'></i>
                                <span>{this.props.cartItem===0?"":this.props.cartItem}</span>
                            </Link>
                        </div>
                    </div>

                </div>
             </section>
            </>
        )
    }
}
export default Search;