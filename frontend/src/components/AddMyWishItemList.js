import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AddMyWishItemList.css"




class AddMyWishItemList extends React.Component {
  constructor(){
    super()
    this.state= {
			items: []
    }
  }

	componentDidMount(){
		var searchword = "men"
		fetch(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=${searchword}&genreId=565211&applicationId=1052009352887299977`)
		.then(res => res.json()) 
    .then(res => {

      this.setState({
        items: res.Items.slice(0, 7)
      })
    })
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


    // const sliderImages = [
    //   "https://cdn.pixabay.com/photo/2021/09/06/16/42/bird-6602049__480.jpg", 
    //   "https://cdn.pixabay.com/photo/2021/08/23/18/37/tea-6568547__480.jpg", 
    //   "https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074__480.jpg",
    //   "https://cdn.pixabay.com/photo/2021/08/23/01/03/cubic-house-6566412__480.jpg",
    //   "https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726__480.jpg",
    //   "https://cdn.pixabay.com/photo/2021/09/07/10/11/coffee-beans-6603499__480.jpg"];
  
		// 	const sliderDiscription = [
		// 		"Discription1", 
		// 		"Discription2", 
		// 		"Discription3",
		// 		"Discription4",
		// 		"Discription5",
		// 		"Discription6"];
		

    return (
      <div class="banner">
      <Slider {...settings}>
        {this.state.items.map((item,id) => (
        <div className="sliderContainer">
					<a href={item.Item.itemUrl}><img className="sliderImage" src={item.Item.mediumImageUrls[0].imageUrl} alt="sliderImages"/></a>
          {/* <img className="sliderImage" src={img} alt="sliderImages"/> */}
          <p>{item.Item.itemName}</p>
        </div>
                ))}
      </Slider>
    </div>
  )
}
}


export default AddMyWishItemList
