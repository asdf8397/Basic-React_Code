import logo from './logo.svg';
import './App.css';
/** STATE
 * props 값을 넣을때 사용
 * return 출력할때 사용
 * 
 * prop는 component를 사용하는 외부자를 위한 데이터
 * state는 component를 사용하는 내부자를 위한 데이터
 */
function Article(props) {
  return(
    <article>
      <h2>{props.title_article}</h2>
      {props.body_article} {/* 밑의 if로 설정한 것이 담긴다. */}
    </article>
  )
}
function Header(props) {
  return (
    <header>
      <h1><a href="/" onClick={(event) => {
        event.preventDefault(); // 글자 text를 클릭했을 때 아무일도 일어나지 않게 설정
        props.onChangeMode(); // preventDefalut() 이후 onChangeMode()가 일어난다.
      }}>{props.title_head}</a></h1> {/* 메이크이벤트 시작이라고 글이 작성되어있음 */}
    </header>
  )
}
function Nav(props) {

}
function App() {
  const arrList = [
    {id:1, title:"html", body:"html is ....."},
    {id:2, title:"css", body:"css is ....."},
    {id:3, title:"js", body:"js is ....."}
  ]
  const mode = "WELCOME" // 이부분에서 WELCOME, READ로 바꿔주는 것에 따라서 mode에 적용되서 화면에 다르게 적힌다.
  let content = null;
  if(mode === "WELCOME") {
    content = <Article title_article="환영합니다." body_article="웹입니다."></Article>
  } else if (mode === "READ") {
    content = <Article title_article="읽기" body_article="웹 읽기"></Article>
  }
  return (
    <div>
      <Header title_head="메이크 이벤트 시작" onChangeMode={function() {
        alert("안녕 알람 딸깍");
      }}></Header>
      <Nav topics></Nav>
      {/* <Article title_article="마지막부분" body_article="마지막부분 텍스트"></Article> */}
      {content} {/* 화면에 나타나는 부분 */}
    </div>
  );
}

export default App;
