import React from "react"
import "css/Friends.css"

function FriendItems(props) {

    const itemClickHandle = (loginid) => {
        props.setFriendUserId(loginid)
    }

    const imageList = [
        "https://1.bp.blogspot.com/-3ZJR0qAaetY/X5OcedJdmlI/AAAAAAABb_M/y9m8IBgxnTcj9oioGhJLLMKG3Neq5kkVwCNcBGAsYHQ/s1029/photo_smartphone_woman.png",
        "https://3.bp.blogspot.com/-lHnkyj_IDCw/XIJBRQrTrAI/AAAAAAABRzM/gnbDlWw9FL0Z9wfsbpMp_Ok9hut9A1zvACLcBGAs/s800/cat_koubakozuwari_brown.png",
        "https://1.bp.blogspot.com/-LZSF-D7T33w/X9lJQUI4RxI/AAAAAAABc20/n73pxgbmgwQBv8HICX8VCth0botErv_0QCNcBGAsYHQ/s644/dog_corgi_tricolor.png",
        "https://4.bp.blogspot.com/-0kLmvB0BBTk/W9597vkjN5I/AAAAAAABP6A/NfBJp8p6dgkzYKVHTekt2kdYvr3eaJG6QCLcBGAs/s800/sports_soccer_pass_man.png",
        "https://4.bp.blogspot.com/-prc93X2i9uQ/WzC-sDWyp6I/AAAAAAABNEI/ZSq00H5LmxUGHuLOlOr-PvkYSk1CQl6ZQCLcBGAs/s800/nigaoe_adam_smith.png",
        "https://1.bp.blogspot.com/-ZlHO8Cc1t9Y/XhwqRbFEJvI/AAAAAAABW9o/_KmYbiO8EAgDoVyQKP32gU4qa05T9bOmwCNcBGAsYHQ/s1600/fashion_osyare_middle_woman.png",
        "https://2.bp.blogspot.com/-x4O-5YLq3bE/VwIjMpXyR_I/AAAAAAAA5gQ/oeFmY3CgIbU84s4qG6TGLABnFBw4WrNBQ/s800/photo_jidori.png",
        "https://1.bp.blogspot.com/-gTf4sWnRdDw/X0B4RSQQLrI/AAAAAAABarI/MJ9DW90dSVwtMjuUoErxemnN4nPXBnXUwCNcBGAsYHQ/s1600/otaku_girl_fashion.png",
        "https://1.bp.blogspot.com/-REwcT7mExvM/X9GYI9R5uZI/AAAAAAABctg/9zoEShs6vOwdAmPGH6oXnyyz9P4IqaUbgCNcBGAsYHQ/s680/hair_kinpatsu_woman.png",
        "https://1.bp.blogspot.com/-K8DEj7le73Y/XuhW_wO41mI/AAAAAAABZjQ/NMEk02WcUBEVBDsEJpCxTN6T0NmqG20qwCNcBGAsYHQ/s1600/kesyou_jirai_make.png",
        "https://1.bp.blogspot.com/-6Oh327001K4/YHDkJjqoolI/AAAAAAABdlQ/qTuxRmBLrFUas301O-jUVT9K5-N3CMSFQCNcBGAsYHQ/s1095/idol_fan_doutan.png",
        "https://1.bp.blogspot.com/-WusqFXyxZyE/X9lJsqgJy7I/AAAAAAABc8M/gyc7RdN77JQPZfGa-rrjL7OMIzvpr4XcgCNcBGAsYHQ/s1000/yukata_kids_couple.png",
        "https://1.bp.blogspot.com/-DU9jll2ZQ38/XexqGlVzO9I/AAAAAAABWdQ/m0lQONbEfSgEjIN14h7iIfRh8WS5qwrFACNcBGAsYHQ/s1600/gal_o_man.png",
        "https://1.bp.blogspot.com/-X_ClXJld65Q/XdtteOeY8gI/AAAAAAABWIo/14YWSpsnoKoPBDtWYjhPXZs0lYJRSR2QACNcBGAsYHQ/s1600/hair_all_back_man.png",
        "https://1.bp.blogspot.com/-qw9MZQkx3LE/XZR9TpoX2gI/AAAAAAABVRI/EyZDLH2-QRUxo2DSAnMJcptlgsLfR0sjACNcBGAsYHQ/s1600/drink_coffee_tea_man.png",
        "https://3.bp.blogspot.com/-l1ohPt_sEiE/XMJyrG9RiQI/AAAAAAABSjA/hegkJUKmjREJ3HuC5xgDHz27ezr_IZtxgCLcBGAs/s800/car_sports_man.png"

    ]

        const list = props.friends.map((friend,id) => {
            const birthday = friend.birthday.split('-')
            const year = birthday[0]
            const month = birthday[1].replace(/^0+/,'')
            const day = birthday[2].replace(/^0+/,'')
            const iconImage = friend.iconimage
            console.log(iconImage)
            return(
                <li onClick={() => itemClickHandle(friend.loginid)}>
                    
                    <h6 className="friend-birthday-year">{ Number(year) === 2001 ? ' Best wishes on your 20th birthday': 'HappyBirthday' }</h6>
                    <img src={imageList[Math.floor(Math.random() * imageList.length)]}/>
                    <div className="friend-birthday">
                    <h6>2021</h6>
                    <h2 className="friend-birthday-month-date"> {month}/{day}</h2>
                    </div>
                    <h4 className="friend-name">{friend.username}</h4>
                </li>
            )
        });

    return (
        <div>
            {list}
        </div>
    )
}

export default FriendItems