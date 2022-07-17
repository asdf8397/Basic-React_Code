import logo from './logo.svg';
import './App.css';
function Header() { /* make_props의 기존 원판 */
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
  return ( // 리액트는 속성을 props라고 부른다.
    // <div className="App">
    //   <Header></Header>
    //   <Nav></Nav>
    //   <Article></Article>
    // </div>

    /* 코드에서 만들어진 것들을 가운데 정렬 ↑ */

    /* 코드에서 만들어진 것들을 왼쪽에 정렬 ↓ */

    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
