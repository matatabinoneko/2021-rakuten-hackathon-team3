import Profile from "components/Profile";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import defaultUserIcon from "assets/person.png";

function FriendProf(props) {
	const IconImage = true ? defaultUserIcon : "url_link";
	return (
		<div className="bg-white">
			<Profile data={props.data} />
			<p className="text-end pb-1 m-0 ">
				<Link to={"/user/" + props.data["loginid"]}>see more </Link>
			</p>
		</div>
	);
}
export default FriendProf;
