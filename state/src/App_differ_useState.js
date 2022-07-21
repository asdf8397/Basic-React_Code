import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function Header(props) {
    return(
        <header>
            <h1><a href="/" onClick={(event) => {
                event.preventDefault();
                props.onChangeMode();
            }}>{props.click_Here}</a></h1>
        </header>
    )
}
function Article(props) {
    return(
        <article>
            <h2>{props.input_text}</h2>
            {props.Web_text}
        </article>
    )
}
function App_useState() {
    const array_useState = [
        {id:1, title:"html", body:"html is ....."},
        {id:2, title:"css", body:"css is ....."},
        {id:3, title:"js", body:"js is ....."}
    ]
    const [mode, setMode] = useState("Welcome");
    let package = null;
    if(mode === "Welcome") {
        package = <Article input_text="환영함" Web_text="웹"></Article>
    } else if (mode === "Read") {
        package = <Article input_text="환영안함" Web_text="앱"></Article>
    }
    return (
        <div>
            <Header click_Here="앗 클릭할꺼니?" onChangeMode={function() {
                alert("안녕 클릭했으니 알림은 덤인거 알지?")
            }}></Header>
            <Nav></Nav>
            {package}
        </div>
    )
}

export default App_useState;