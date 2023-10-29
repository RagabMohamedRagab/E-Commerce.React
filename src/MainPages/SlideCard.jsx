import React, { Component } from "react";
import Seed from "./SeedData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class SlideCard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      appendDots: dots => (
          <ul style={{ margin: "0px" }}> {dots} </ul>
      ),
    };
    return (
      <>
        <Slider {...settings}>
          {Seed.map((val, index) => {
            return (
              <div className="box d_flex top" key={index}>
                <div className="left">
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                  <button className="btn-primary">Visit Collections</button>
                </div>
                <div className="right">
                  <img src={val.cover} alt={val.id} />
                </div>
              </div>
            );
          })}
        </Slider>
      </>
    );
  }
}
export default SlideCard;
