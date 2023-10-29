import React,{Component} from 'react'
import TopCart from './TopCart';
import './Style.css'
class TopCate extends Component{
    render(){
        return(
            <>
              <section className='topCat backgound'>
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M384 96V224H256V96H384zm0 192V416H256V288H384zM192 224H64V96H192V224zM64 288H192V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                            <h2>Top Categories</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View All</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <TopCart/>
                </div>
              </section>
            </>
        )
    }
}
export default TopCate;