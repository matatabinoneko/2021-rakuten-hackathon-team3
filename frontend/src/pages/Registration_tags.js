import React from "react"
import { Button, Form, FormGroup, FormControl, ControlLabel ,Row, Col} from "react-bootstrap";


function Registration_birthday() {
	return (
    <Form.Group as={Col} className="mb-3" controlId="Registration_tags">
    <Form.Label as="legend">
      What are you interested in ?
    </Form.Label >
			<div class="form-check form-check-inline">
        <Form.Check label="レディースファッション" />
        <Form.Check label="メンズファッション" />
        <Form.Check label="インナー・下着・ナイトウェア" />
        <Form.Check label="バッグ・小物・ブランド雑貨" />
        <Form.Check label="靴" />

        <Form.Check label="腕時計" />
        <Form.Check label="ジュエリー・アクセサリー" />
        <Form.Check label="キッズ・ベビー・マタニティ" />
        <Form.Check label="おもちゃ" />
        <Form.Check label="スポーツ・アウトドア" />
			</div>
			<div class="form-check form-check-inline">
        <Form.Check label="家電" />
        <Form.Check label="TV・オーディオ・カメラ" />
        <Form.Check label="パソコン・周辺機器" />
        <Form.Check label="スマートフォン・タブレット" />
        <Form.Check label="光回線・モバイル通信" />

        <Form.Check label="食品" />
        <Form.Check label="スイーツ・お菓子" />
        <Form.Check label="水・ソフトドリンク" />
        <Form.Check label="ビール・洋酒" />
        <Form.Check label="日本酒・焼酎" />
			</div>
			<div class="form-check form-check-inline">
        <Form.Check label="インテリア・寝具・収納" />
        <Form.Check label="日用品雑貨・文房具・手芸" />
        <Form.Check label="キッチン用品・食器・調理器具" />
        <Form.Check label="本・雑誌・コミック" />
        <Form.Check label="CD・DVD" />

        <Form.Check label="テレビゲーム" />
        <Form.Check label="ホビー" />
        <Form.Check label="楽器・音響機器" />
        <Form.Check label="車・バイク" />
        <Form.Check label="車用品・バイク用品" />
			</div>
			<div class="form-check form-check-inline">
        <Form.Check label="美容・コスメ・香水" />
        <Form.Check label="ダイエット・健康" />
        <Form.Check label="医薬品・コンタクト・介護" />
        <Form.Check label="ペット・ペットグッズ" />
        <Form.Check label="花・ガーデン・DIY" />
        <Form.Check label="サービス・リフォーム" />

        <Form.Check label="住宅・不動産" />
        <Form.Check label="カタログギフト・チケット" />
        <Form.Check label="百貨店・総合通販・ギフト" />
			</div>
    </Form.Group>
  );
}


export default Registration_birthday;
