import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState(["치킨", "피자", "햄버거"]);
  let [글제목2, 글제목변경2] = useState(["남자 코트 추천"]);
  let [인풋, 인풋변경] = useState([" "]);
  let [입력값, 입력값변경] = useState("");
  let a = false;
  let [modal, setModal] = useState(a);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [title, setTilte] = useState(0);
  let [taste, setTaste] = useState("맛있다");
  let t = [...글제목];

  t[0] = ["강남 우동 맛집"];
  let copy = [...글제목];
  function ascending(a, b) {
    return a < b ? -1 : a == b ? 0 : 1;
  }
  let c = [...글제목2];
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Favorite Food List</h4>
      </div>
      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                //setModal(!modal);
                // setTilte(i);
                // c[0] = 글제목[i];
                // 글제목변경2(c);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <span>
              맛 평가 : <t></t>
              <input
                onChange={(e) => {
                  입력값변경(e.target.value);
                  console.log(입력값);
                }}
              ></input>
              <button
                onClick={() => {
                  setTaste(입력값);
                }}
              >
                입력
              </button>
            </span>
            <br></br>
            <br></br>
            <button
              onClick={() => {
                setModal(!modal);
                setTilte(i);
              }}
            >
              상세내용
            </button>
            &nbsp;
            <button
              onClick={() => {
                let 복사글제목 = [...글제목];
                복사글제목.splice(i, 1);
                글제목변경(복사글제목);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <div>
        음식메뉴추가 <br></br>
      </div>
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      ></input>
      <button
        onClick={() => {
          let 복사본 = [...입력값];
          //글제목.unshift(복사본);  이방법도 가능
          글제목변경([복사본, ...글제목]);
          let 따봉복사 = [...따봉];
          따봉복사.unshift(0);
          따봉변경(따봉복사);
        }}
      >
        입력
      </button>
      {modal == true ? (
        <Modal
          setModal={setModal}
          title={title}
          c={c}
          글제목변경={글제목변경}
          글제목={글제목}
          modal={modal}
          taste={taste}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  // let t = [...props.글제목];
  // t[0] = ["강남 우동 맛집"];

  return (
    <div className="modal">
      <h4> {props.글제목[props.title]}</h4>
      <p>맛 : {props.taste} </p>
      <button
        onClick={() => {
          props.setModal(!props.modal);
          //let 글제목demo = [...props.글제목];
          //props.글제목변경(글제목demo);
        }}
      >
        창 닫기
      </button>
    </div>
  );
}
export default App;
