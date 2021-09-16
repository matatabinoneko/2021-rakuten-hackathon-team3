import React, { useState } from "react";

function Registration_birthday(props) {
  const [val, setVal] = useState([]);

  const handleChange = (e) => {

    if (val.includes(e.target.value)) {

      setVal(val.filter((item) => item !== e.target.value));
    } else {
      setVal([...val, e.target.value]);
    }

    props.setTaglist(val)
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-xs-6">
          <>
            <div>
              <label>
                <input
                  type="checkbox"
                  value= "1"
                  onChange={handleChange}
                  checked={val.includes("1")}
                />
                レディースファッション
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="2"
                  onChange={handleChange}
                  checked={val.includes("2")}
                />
                メンズファッション
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="3"
                  onChange={handleChange}
                  checked={val.includes("3")}
                />
                インナー・下着・ナイトウェア
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="4"
                  onChange={handleChange}
                  checked={val.includes("4")}
                />
                バッグ・小物・ブランド雑貨
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="5"
                  onChange={handleChange}
                  checked={val.includes("5")}
                />
                靴
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="6"
                  onChange={handleChange}
                  checked={val.includes("6")}
                />
                腕時計
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="7"
                  onChange={handleChange}
                  checked={val.includes("7")}
                />
                ジュエリー・アクセサリー
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="8"
                  onChange={handleChange}
                  checked={val.includes("8")}
                />
                キッズ・ベビー・マタニティ
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="9"
                  onChange={handleChange}
                  checked={val.includes("9")}
                />
                おもちゃ
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="10"
                  onChange={handleChange}
                  checked={val.includes("10")}
                />
                スポーツ・アウトドア
              </label>
            </div>
          </>
        </div>
        <div class="col-sm-3 col-xs-6">
          <>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="11"
                  onChange={handleChange}
                  checked={val.includes("11")}
                />
                家電
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="12"
                  onChange={handleChange}
                  checked={val.includes("12")}
                />
                TV・オーディオ・カメラ
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="13"
                  onChange={handleChange}
                  checked={val.includes("13")}
                />
                パソコン・周辺機器
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="14"
                  onChange={handleChange}
                  checked={val.includes("14")}
                />
                スマートフォン・タブレット
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="15"
                  onChange={handleChange}
                  checked={val.includes("15")}
                />
                光回線・モバイル通信
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="16"
                  onChange={handleChange}
                  checked={val.includes("16")}
                />
                食品
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="17"
                  onChange={handleChange}
                  checked={val.includes("17")}
                />
                スイーツ・お菓子
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="18"
                  onChange={handleChange}
                  checked={val.includes("18")}
                />
                水・ソフトドリンク
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="19"
                  onChange={handleChange}
                  checked={val.includes("19")}
                />
                ビール・洋酒
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="20"
                  onChange={handleChange}
                  checked={val.includes("20")}
                />
                日本酒・焼酎
              </label>
            </div>
          </>
        </div>
        <div class="col-sm-3 col-xs-6">
          <>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="21"
                  onChange={handleChange}
                  checked={val.includes("21")}
                />
                インテリア・寝具・収納
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="22"
                  onChange={handleChange}
                  checked={val.includes("22")}
                />
                日用品雑貨・文房具・手芸
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="23"
                  onChange={handleChange}
                  checked={val.includes("23")}
                />
                キッチン用品・食器・調理器具
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="24"
                  onChange={handleChange}
                  checked={val.includes("24")}
                />
                本・雑誌・コミック
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="25"
                  onChange={handleChange}
                  checked={val.includes("25")}
                />
                CD・DVD
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="26"
                  onChange={handleChange}
                  checked={val.includes("26")}
                />
                テレビゲーム
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="27"
                  onChange={handleChange}
                  checked={val.includes("27")}
                />
                ホビー
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="28"
                  onChange={handleChange}
                  checked={val.includes("28")}
                />
                楽器・音響機器
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="29"
                  onChange={handleChange}
                  checked={val.includes("29")}
                />
                車・バイク
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="30"
                  onChange={handleChange}
                  checked={val.includes("30")}
                />
                車用品・バイク用品
              </label>
            </div>
          </>
        </div>
        <div class="col-sm-3 col-xs-6">
          <>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="31"
                  onChange={handleChange}
                  checked={val.includes("31")}
                />
                美容・コスメ・香水
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="32"
                  onChange={handleChange}
                  checked={val.includes("32")}
                />
                ダイエット・健康
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="33"
                  onChange={handleChange}
                  checked={val.includes("33")}
                />
                医薬品・コンタクト・介護
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="34"
                  onChange={handleChange}
                  checked={val.includes("34")}
                />
                ペット・ペットグッズ
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="35"
                  onChange={handleChange}
                  checked={val.includes("35")}
                />
                花・ガーデン・DIY
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="36"
                  onChange={handleChange}
                  checked={val.includes("36")}
                />
                サービス・リフォーム
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="37"
                  onChange={handleChange}
                  checked={val.includes("37")}
                />
                住宅・不動産
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="38"
                  onChange={handleChange}
                  checked={val.includes("38")}
                />
                カタログギフト・チケット
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="39"
                  onChange={handleChange}
                  checked={val.includes("39")}
                />
                百貨店・総合通販・ギフト
              </label>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Registration_birthday;

// function Registration_birthday() {

// 	return (
//     <Form.Group as={Col} className="mb-3" controlId="Registration_tags">
//     <Form.Label as="legend">
//       What are you interested in ?
//     </Form.Label >
// 			<div class="form-check form-check-inline">
//         <Form.Check label="レディースファッション" />
//         <Form.Check label="メンズファッション"  />
//         <Form.Check label="インナー・下着・ナイトウェア" />
//         <Form.Check label="バッグ・小物・ブランド雑貨" />
//         <Form.Check label="靴" />

//         <Form.Check label="腕時計" />
//         <Form.Check label="ジュエリー・アクセサリー" />
//         <Form.Check label="キッズ・ベビー・マタニティ" />
//         <Form.Check label="おもちゃ" />
//         <Form.Check label="スポーツ・アウトドア" />
// 			</div>
// 			<div class="form-check form-check-inline">
//         <Form.Check label="家電" />
//         <Form.Check label="TV・オーディオ・カメラ" />
//         <Form.Check label="パソコン・周辺機器" />
//         <Form.Check label="スマートフォン・タブレット" />
//         <Form.Check label="光回線・モバイル通信" />

//         <Form.Check label="食品" />
//         <Form.Check label="スイーツ・お菓子" />
//         <Form.Check label="水・ソフトドリンク" />
//         <Form.Check label="ビール・洋酒" />
//         <Form.Check label="日本酒・焼酎" />
// 			</div>
// 			<div class="form-check form-check-inline">
//         <Form.Check label="インテリア・寝具・収納" />
//         <Form.Check label="日用品雑貨・文房具・手芸" />
//         <Form.Check label="キッチン用品・食器・調理器具"/>
//         <Form.Check label="本・雑誌・コミック" />
//         <Form.Check label="CD・DVD" />

//         <Form.Check label="テレビゲーム" />
//         <Form.Check label="ホビー" />
//         <Form.Check label="楽器・音響機器" />
//         <Form.Check label="車・バイク" />
//         <Form.Check label="車用品・バイク用品" />
// 			</div>
// 			<div class="form-check form-check-inline">
//         <Form.Check label="美容・コスメ・香水" />
//         <Form.Check label="ダイエット・健康" />
//         <Form.Check label="医薬品・コンタクト・介護" />
//         <Form.Check label="ペット・ペットグッズ" />
//         <Form.Check label="花・ガーデン・DIY"/>
//         <Form.Check label="サービス・リフォーム" />

//         <Form.Check label="住宅・不動産" />
//         <Form.Check label="カタログギフト・チケット" />
//         <Form.Check label="百貨店・総合通販・ギフト"/>
// 			</div>
//     </Form.Group>

//   );
// }

// export default Registration_birthday;

