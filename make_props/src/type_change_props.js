import logo from "./logo.svg";
import "./App.css";
function Header(props_title) {
    return (
        <header>
            <h1><a href="/">{props_title.title}</a></h1>
        </header>
    );
}
function Nav(props_Header) {
    const list_Arr = []
    for(let i = 0; i<)
    return (
        /** return안에서 이렇게 묶어서 설정할 수 도 있지만 
         * 다르게 처리 가능하다.
        <nav>
            <ol>
                <li><a href="/read/1">리스트넘버원</a></li>
                <li><a href="/read/2">리스트넘버투</a></li>
                <li><a href="/read/3">리스트넘버쓰리</a></li>
            </ol>
        </nav>
        */

    );
}
function Article() {
    return (
        <article>
            <h2>안녕하세요요</h2>
            안녕 웹입니다.
        </article>
    );
}
function OutTypeApp() {
    const topics = [
        {id:1, title:"html", body:"html is ..."},
        {id:2, title:"css", body:"css is ..."},
        {id:3, title:"js", body:"js is ..."}
    ]
    return(
        <div>
            <Header title="안녕하십니까 웹입니다."></Header>
            <Nav></Nav>
            <Article></Article>
        </div>
    );
}
export default OutTypeApp;