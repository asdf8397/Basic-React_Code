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
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}
function Header(props) {
  return (
    <header>
      <h1><a href="/" onClick={(event) => {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}
function Nav(props) {

}
function App() {
  const 
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
