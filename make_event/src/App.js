import logo from './logo.svg';
import './App.css';
function Header(props_title) {
  return(
    <header>
      <h1><a href="/">{props_title.title}</a></h1>
    </header>
  )
}
function Nav(props_NavList) {
  const NavList = []
  for(i = 0; i < props_NavList.arrayList.length; i++) {
    let listSum = props_NavList.arrayList[i]; 
    // 가져와서 lstSum에 넣음 뿌려줄때 listSum을 활용하면 된다.
    NavList.push(<li key={listSum.id}><a href={"/read/" + listSum.id}>{listSum.title}</a></li>)
  }
  return (
    <ol>
      {NavList}
    </ol>
  );
}
function Article(props_article) {
  return (
    <article>
      <h2>{props_article.title}</h2>
      {props_article.body}
    </article>
  )
}
function App() {
  const arrayList = [
    {id:1, title:"html", body:"html is ...."},
    {id:2, title:"css", body:"css is ...."},
    {id:3, title:"js", body:"js is ...."}
  ]
  return (
    /** mode 변경 기능 (컴포넌트 추가, onChangeMode 이벤트 추가 (핸들러))
     * 
     * 여기의 App.js파일에서 onClick 이벤트를 만들어 줄때,
     * 이것이 create, update, delete라는 것을 알려주어야 합니다.
     * onClick 이벤트를 만든 함수를 받기 위해서 Control 컴포넌트에
     * onChangeMode에는 _mode라는 매개변수를 만들어줘야합니다. ,, 이것은 나중에
     * 그럼 onChnageMode라는 핸들러에서는 _mode라는 값으로
     * 현재 상태를 알려주게 됩니다.
     */
    /* 원래 onChange인데 onchangeMode는 화살표 함수의 받을것을 설정함 */
    <div>
      <Header title="안녕하십니까 웹입니다. a태그 추가하면 클릭되지롱"></Header>
      <Nav topics ={arrayList}></Nav>
      <Article title="안녕하세요요요요" body="웹 이지롱"></Article>
    </div>
  );
}

export default App;
