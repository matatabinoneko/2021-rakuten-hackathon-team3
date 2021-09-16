import "css/Profile.css";
import Tag from "components/Tag";

function Profile(props) {
	const empty_list = [];
	for (let tag of props.data.tags) {
		empty_list.push(<Tag tagName={tag["name"]} />);
	}

	return (
		<table class="table p-0 m-0">
			<tbody>
				<tr>
					<th className="fit" scope="row">
						first name
					</th>
					<td>{props.data.firstname}</td>
				</tr>
				<tr>
					<th className="fit" scope="row">
						last name
					</th>
					<td>{props.data.lastname}</td>
				</tr>
				<tr>
					<th className="fit" scope="row">
						birthday
					</th>
					<td>{props.data.birthday}</td>
				</tr>
				<tr>
					<th className="fit" scope="row">
						zipcode
					</th>
					<td>{props.data.zipcode}</td>
				</tr>
				<tr>
					<th className="fit" scope="row">
						address
					</th>
					<td>{props.data.address}</td>
				</tr>
				<tr>
					<th className="fit" scope="row">
						tags
					</th>
					<th>{empty_list}</th>
				</tr>
			</tbody>
		</table>
	);
}

export default Profile;
