import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AddMyWishItemList.css"




class AddMyWishItemList extends React.Component {
  constructor(){
    super()
    this.state= {
    }
  }

  render(){

    const settings = {
      autoplay: true,
      autoplaySpeed: 4500,
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
    }

    const sliderImages = [
      "https://cdn.pixabay.com/photo/2021/09/06/16/42/bird-6602049__480.jpg", 
      "https://cdn.pixabay.com/photo/2021/08/23/18/37/tea-6568547__480.jpg", 
      "https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074__480.jpg",
      "https://cdn.pixabay.com/photo/2021/08/23/01/03/cubic-house-6566412__480.jpg",
      "https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726__480.jpg",
      "https://cdn.pixabay.com/photo/2021/09/07/10/11/coffee-beans-6603499__480.jpg"];
  

    return (
      <div class="banner">
      <Slider {...settings}>
        {sliderImages.map((img) => (
        <div className="sliderContainer">
          <img className="sliderImage" src={img} alt="sliderImages"/>
          <p>Title</p>
        </div>
                ))}
      </Slider>
    </div>
  )
}
}


export default AddMyWishItemList
