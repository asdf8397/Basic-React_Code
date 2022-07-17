import logo from "./logo.svg";
import "./App.css";
function WEB() {
    return(
        <header>
            <h1><a href="/">WEB</a></h1>
        </header>
    )
}
function List() {
    return(
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
            <h1>Welcome</h1>
            Hello, WEB
        </article>
    );
}
function App_change() { 
    // 상단에서 간단하게 완성한것을 아래로 가져와서 붙임(컴포넌트)
    return (
        <div>
            <WEB/>
            <List/>
            <Article/>
        </div>
    )
}
export default App_change;