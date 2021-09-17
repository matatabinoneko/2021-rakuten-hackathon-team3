import React from "react"
import "css/Friends.css"

function FriendItems(props) {

    const itemClickHandle = (loginid) => {
        props.setFriendUserId(loginid)
    }

        const list = props.friends.map((friend,id) => {
            const birthday = friend.birthday.split('-')
            const year = birthday[0]
            const month = birthday[1].replace(/^0+/,'')
            const day = birthday[2].replace(/^0+/,'')
            return(
                <li onClick={() => itemClickHandle(friend.loginid)}>
                    
                    <h6 className="friend-birthday-year">{ Number(year) === 2001 ? ' Best wishes on your 20th birthday!': 'HappyBirthday' }</h6>
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"/>
                    <div className="friend-birthday">
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