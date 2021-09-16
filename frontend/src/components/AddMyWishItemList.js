import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "css/AddMyWishItemList.css";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useToasts } from 'react-toast-notifications';
import { useGlobalState } from "App";
import axios from "axios";

// const initialState = {
// 	username: "",
// 	loginid: "",
// 	password: "",
// 	confirmPass: "",
// 	firstname: "",
// 	lastname: "",
// 	zipcode: "",
// 	address: "",
// 	iconimage: null,
// 	is_recommend: false,
// };


const AddMyWishItemList = (props) =>{
	const [items, setItems] = useState([])
	const { addToast } = useToasts()
	// const [userData, setUserData] = useState([])

	const [userId, setUserId] = useGlobalState("userId");

	// const getUser = () => {
	// 	axios.get(`/api/users/${userId}`).then((res) => {
	// 		setUserData(res.data)
	// 	});
	// };
	const addWishList = () => {
		const params = { productid: [116] };

		// axios.post("/api/wishlists/<変数になる>/product/", params).then((res) => {
		axios.post(`/api/wishlists/${userId}/product/`, params).then((res) => {
			// console.log(userId);
		});
	};

	const multifunc=()=>{
		addWishList()
		addToast("Added to your wish list!", {appearance: 'success',autoDismiss: true, autoDismissTimeout:3500})
	}

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
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			}
		]
	}



	return (
		<div className="banner">
		
      <Slider {...settings}>
        {items.map((item,id) => (
        <div className="sliderContainer" key={id}>
					<a href={item.Item.itemUrl} target="_blank" rel="noopener noreferrer"><img key={id} className="sliderImage" src={item.Item.mediumImageUrls[0].imageUrl} alt="sliderImages"/></a>
          {/* <img className="sliderImage" src={img} alt="sliderImages"/> */}
          <p key={id}>{item.Item.itemName}</p>
					<IconButton type="button" variant="outlined" color="secondary" onClick={() => multifunc()}>
						<FavoriteBorderIcon />	
					</IconButton>
        </div>
                ))}
      </Slider>
    </div>
	)
}

export default AddMyWishItemList
