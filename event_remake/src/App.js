import logo from './logo.svg';
import './App.css';
function Article(props) {
  return(
    <article>
      <h1>{props.title_text}</h1>
      {props.body_text}
    </article>
  )
}
function Header(props) {
  return(
    <header>
      <h1><a href="/" onClick={function(event) { 
        {/* 여기서 a href="/"을 붙여준 것은 클릭할 수 있게 만들어준 것 */}
        event.preventDefault(); 
        // event.preventDefault();를 해주지 않았지만 click하면 화면이 넘어가려고 한다. 
        // 그래서 사용함
        // onClick을 해주고 클릭하면 function(event)에 의해서 화면이 넘어간다.
        // 이것을 방지하기 위해서 event.preventDefalut를 걸어준다 그러면 클릭했을때 화면이 넘어가지 않는다.
        props.onChangeMode();
        /* props.onChangeMode();는 Header에 넣어준 onChangeMode={function() {
          alert("안녕 알림 딸깍")을 해줄때 사용함}} */
        }}>{props.title_head}</a></h1>
    </header>
  )
}
function Nav(props) {
    const input = [];
    for(let i=0; i<props.arr_topicsList.length; i++) {
        let input_num2 = props.arr_topicsList[i];
    input.push(<li key={input_num2.id}>
      <a id={input_num2.id} href={"/read/" + input_num2.id}
      onClick={event => {
        {/* 여기서 id는 const arr_topicsList의 배열 id를 나타냄 */}
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>
        {input_num2.title}</a>
        </li>)
  }
  return(
    <ol>
      {input}
    </ol>
  )
}
function App() { // 여기는 출력
  const arr_topicsList =[
    {id:1, title:"html", body:"html is ....."},
    {id:2, title:"css", body:"css is ...."},
    {id:3, title:"js", body:"js is ...."}
  ]
  return (
    <div> {/* 출력하는 부분인 여기에 Header를 먼저 설정할때는 function을 설정후 설정해야함 */}
      <Header title_head="메이크 이벤트 시작" onChangeMode={function() {
        alert("안녕 알람 딸깍")
      }}></Header>
      <Nav output={arr_topicsList} onChangeMode={(id) => {
        alert(id)
      }}></Nav>
      <Article title_text="마지막부분" body_text="마지막부분 텍스트"></Article>
    </div>
  );
}

export default App;
