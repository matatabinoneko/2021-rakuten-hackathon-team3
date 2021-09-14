import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "css/AddMyWishItemList.css";


const AddMyWishItemList = (props) =>{
	const [items, setItems] = useState([])

	useEffect(() => {
		

		fetch(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=${props.search}&applicationId=1052009352887299977`)
		.then(res => res.json()) 
		.then(res => {
			setItems(res.Items.slice(0, 9))
			// this.setState({
			// 	items: res.Items
			// })
		})
	},[props.search])
	
	const settings = {
		autoplay: true,
		autoplaySpeed: 4500,
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 5,
	}


	return (
		<div className="banner">
      <Slider {...settings}>
        {items.map((item,id) => (
        <div className="sliderContainer" key={id}>
					<a href={item.Item.itemUrl}><img key={id} className="sliderImage" src={item.Item.mediumImageUrls[0].imageUrl} alt="sliderImages"/></a>
          {/* <img className="sliderImage" src={img} alt="sliderImages"/> */}
          <p key={id}>{item.Item.itemName}</p>
        </div>
                ))}
      </Slider>
    </div>
	)
}

export default AddMyWishItemList
