import logo from './logo.svg';
import './App.css';
function Header() {
  return(
    <header>
      <h1><a href="/">WEB</a></h1>
    </header>
  )
}
function Nav() {
  return (
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  );
}
function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  )
}
function App() {
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
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
