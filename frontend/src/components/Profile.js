import "css/Profile.css";
import Tag from "components/Tag";

function Profile(props) {



	// const id_dic = {
	// 	1: 'レディースファッション',
	// 	2: 'メンズファッション',
	// 	3: 'インナー・下着・ナイトウェア',
	// 	4: 'バッグ・小物・ブランド雑貨',
	// 	5:'靴', 
	// 	6: '腕時計',
	// 	7:'ジュエリー・アクセサリー',
	// 	8: 'キッズ・ベビー・マタニティ',
	// 	9:'おもちゃ',
	// 	10:'スポーツ・アウトドア',
	// 	11:'家電',
	// 	12:'TV・オーディオ・カメラ',
	// 	13: 'パソコン・周辺機器',
	// 	14:'スマートフォン・タブレット',
	// 	15: '光回線・モバイル通信',
	// 	16:'食品',
	// 	17: 'スイーツ・お菓子',
	// 	18: '水・ソフトドリンク', 
	// 	19: 'ビール・洋酒',
	// 	20: '日本酒・焼酎',
	// 	21: 'インテリア・寝具・収納',
	// 	22: '日用品雑貨・文房具・手芸',
	// 	23: 'キッチン用品・食器・調理器具',
	// 	24: '本・雑誌・コミック', 
	// 	25: 'CD・DVD',
	// 	26: 'テレビゲーム',
	// 	27: 'ホビー',
	// 	28: '楽器・音響機器',
	// 	29: '車・バイク',
	// 	30: '車用品・バイク用品',
	// 	31: '美容・コスメ・香水',
	// 	32: 'ダイエット・健康',
	// 	33: '医薬品・コンタクト・介護',
	// 	34: 'ペット・ペットグッズ',
	// 	35: '花・ガーデン・DIY',
	// 	36: 'サービス・リフォーム',
	// 	37: '住宅・不動産',
	// 	38: 'カタログギフト・チケット',
	// 	39: '百貨店・総合通販・ギフト'
	// }
	const tags = props.data.tags
	const empty_list = []

		// for (let i = 0; i < tags.length; i++) {
	// 	tags.push(<Tag tagName={`tag${i}`} />);
	// }
	

for (var tag in tags ) {
	for (let childtag of Object.keys(tag)){
		empty_list.push(<Tag tagName={`${tags[tag][childtag]}`} />);
	}
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
