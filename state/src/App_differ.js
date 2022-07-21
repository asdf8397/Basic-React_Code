import logo from './logo.svg';
import './App.css';
import App from './App';
import {useState} from "react"; // useState를 해줄때 무조건 선언해줘야함

/** state
 * props 값을 넣을때 사용
 * return 출력할때 사용
 * 
 * props는 component를 사용하는 외부자를 위한 데이터
 * state는 component를 사용하는 내부자를 위한 데이터
 * 
 * 
 * 설명
 * 리액트에서 컴포넌트에서 동적인 값의 상태(State)라고 부른다.
 * 리액트의 16.8버전부터 Hooks의 기능이 도입되면서 함수형 컴포넌트에서도
 * 상태를 관리할 수 있게 되었다.
 * Hooks중에 useState() 함수가 있는데 이를 통해 함수형 컴포넌트에서도
 * 함수를 관리할 수 있다.
 * 
 * useState()함수 사용법
 * import React {useState} from "react";
 * 리액트 패키지에서 useState함수를 불러온다.
 * 
 * const [number, setNumber] = useState(0);
 * useState 함수를 호출하면 배열을 반환하는데 1번째 원소 number는
 * 현재 상태 값 변수이고, 2번째 원소 setNumber는 상태 값을 갱신해주는
 * Setter함수이다.
 * useState(괄호 안의값은 상태의 초기값)이다.
 */
function Header(props) {
    return (
        <header>
            <h1><a href="/" onClick={(event) => {
                event.preventDefault();
                props.onChangeMode();
            }}>{props.title_alert}</a></h1>
        </header>
    )
}
function Article(props) {
    return(
        <article>
            <h2>{props.text}</h2>
            {props.WEB_Read}
        </article>
    )
}
function Nav(props) {
    const arr_list = [];
    for(let i=0; i < props.array.length; i++) {
        let input_list = props.array[i]; // 여기서 말하는 input_list는 array에 대한 것
        arr_list.push(<li key={input_list.id}>
            <a id={input_list.id} href={"/read/" + input_list.id}
            // input_list.id는 array의 id부분을 말하고 있음
            onClick={event => {
                event.preventDefault();
                props.onChangeMode(event.target.id) // 여기서 id는 array부분의 id
            }}>
                {input_list.title}</a>
        </li>)
    }
    return(
        <ol>
            {arr_list}
        </ol>
    )
}
function App_differ() {
     const array = [
        {id:1, title:"html", body:"html is ....."},
        {id:2, title:"css", body:"css is ......"},
        {id:3, title:"js", body:"js is ....."}
    ]
    /*
    const _mode = useState("READ");
    console.log("_mode", _mode);
    const mode = _mode[0];
    const setMode = _mode[1];
    ↑ Hook의 useState의 const_mode = useState("READ")로 지정해서
    _mode에 넣어주고 const mode, const setMode 등 같이 따로 넣어줄때
    사용하게 된다

    간단하게 mode, setMode를 넣어주는 방법 배열로 넣어주는 방법
    위의 방법은 [0],[1]처럼 배열을 따로 지정해서 넣어줬다면 지금의
    const[mode, setMode]는 배열을 묶어서 한번에 넣어주는 방법이다.
    */
    const [mode, setMode] = useState("WELCOME");
    let content_input = null;
    if(mode === "WELCOME") {
        content_input = <Article text = "안녕 환영" WEB_Read="웹"></Article>
    } else if(mode === "READ") {
        content_input = <Article text = "읽기" WEB_Read="웹 읽기"></Article>
    }
    return (
        <div>
            <Header title_alert="이것을 눌러보세요" onChangeMode={function() {
                alert("안녕 알림이 떴어요");
            }}></Header>
            <Nav array={array} onChangeMode={(id) => {
                alert(id)
            }}></Nav>
            {/* <Article></Article> */}
            {content_input}
        </div>
    )
}
export default App_differ;