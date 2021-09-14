import { Link } from "react-router-dom";

function RoutingPage() {
	return (
		<div>
			<div>
				<Link to="/">routing page</Link>
			</div>
			<div>
				<Link to="/signin">signin page</Link>
			</div>
			<div>
				<Link to="/registration">register page</Link>
			</div>
			<div>
				<Link to="/mock">mock page</Link>
			</div>
			<div>
				<Link to="/top">top page</Link>
			</div>
		</div>
	);
}

export default RoutingPage;
