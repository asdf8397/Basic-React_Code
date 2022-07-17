import logo from './logo.svg';
import './App.css';
function Header() {
  return(
    <header>
      <h1><a href="/">WEB</a></h1>
    </header>
  );
}
function App() {
  return (
    // <div className="App">
    //   Hello
    // </div>

    /* 화면에 function을 만들고 직접 태그를 만들어줘서 index.js 연결해서
    화면에 뿌려주는 방법  */
    <div> {/** index.js의 화면에 출력해줄때 방법(1) */}
      <header>
        <h1><a href="/">WEB</a></h1>
      </header>
      <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;


/* export출력 사용방법 */
/*
export default랑 export 어느것을 사용하던지 상관은 없음
단, export default는 하나의 함수를 밖으로 출력해줄때 사용한다.
export{}는 여러개를 밖으로 출력할때 사용한다.
*/