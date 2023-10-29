import React,{Component} from 'react'
import Categories from './Categories';
import Slider from './Slider';
import './Home.css'

class Home extends Component{
    render(){
        return(
            <>
             <section className='home'>
                <div className='container d_flex'>
                    <Categories/>
                    <Slider/>
                </div>
             </section>
            </>
        )
    }
}
export default Home;