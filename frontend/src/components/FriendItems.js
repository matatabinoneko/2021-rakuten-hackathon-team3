import React from "react"
import "css/Friends.css"

function FriendItems(props) {

    const itemClickHandle = (loginid) => {
        console.log(loginid)
    }

        const list = props.friends.map((friend,id) => {
            const birthday = friend.birthday.split('-')
            const year = birthday[0]
            const month = birthday[1].replace(/^0+/,'')
            const day = birthday[2].replace(/^0+/,'')
            return(
                <li onClick={() => itemClickHandle(friend.loginid)}>
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"/>
                    <div className="friend-birthday">
                        <h3 className="friend-birthday-year">{year}</h3>
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