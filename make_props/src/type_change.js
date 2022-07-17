import logo from './logo.svg';
import './App.css';

function Header(props) { 
    // 여기의 function Header()의 괄호안에 props라고 들어가는데
    // 많은 사람들이 보통 props라고 써주기 때문에 굳이 변경시켜 주지 않아도 된다.
    
    /* 여기서 outer, props는 콘솔에 찍힐때 어떤것이 콘솔에 찍히는지
    명확히 알수있는 타이틀의 임시명이라고 생각하면된다.  */
    // console.log("outer", props);
    // console.log("props", props);

    console.log("props_title", props.title);
    // 출력: props_title REACT
    /** 설명 ↑
     * props_title이라고 props의 이름을 정하고 바로 props.title을
     * 넣어주게 되면 <Header title="REACT"></Header>로 지정한 값이
     * 바로 들어온다 바로 들어오는 값은 REACT가 되서
     * console.log()출력을 하게 되면 ,, props_title REACT가 된다
     * 
     * 쉽게 말해서 REACT가 바로 들어오는 것은 value값이 바로 들어온다는 것
     * key값을 무시하고 바로 들어온 상태
     */
    console.log("props_titleName_test", props, props.title);
    // 출력: props_titleName_test{title: "REACT"}
    /** 설명 ↑
     * props_titleName_test라고 props의 이름을 임시로 정해주고 
     * function Header()에 담은 props의 값을 props, props.title로
     * 빼내주게 되면 props_titleName_test(임시로 정해준 이름)
     * props(key), props.title(value)가 된다.
     * 
     * 그래서 console.log()로 출력하면 
     * props_titleName_test{title: 'REACT'}가 된다.
     * 여기서 title은 key 여기서 REACT는 value
     * 
     * 추가설명 props_titleName_test{title: 'REACT'}로 출력이 되는 상태
     * 이면 key, value값으로 props에 담겨진 상태이다.
     */
    return (
        <header>
            <h1><a href="/">{props.title}</a></h1>
            {/* 여기의 props: key, title: value에 담아준 상태로
                title이 REACT이기 때문에 {props.title}을 해주면
                REACT의 text가 찍힌다. */}
        </header>
    );
}
function Nav(props_List) {
    console.log(props_List.first);
    console.log(props_List.second);
    console.log(props_List.third);
    return (
        <ol>
            <li><a href="/read/1">{props_List.first}</a></li>
            <li><a href="/read/2">{props_List.second}</a></li>
            <li><a href="/read/3">{props_List.third}</a></li>
        </ol>
    );
}
function Article(props_titleName) {
    console.log(props_titleName.title);
    console.log(props_titleName.body);
    return (
        <article>
            <h2>{props_titleName.title}</h2>
            {props_titleName.body}
        </article>
    );
}
function Outperform() {
    return (
        <div>
            <Header title="REACT"></Header> 
            {/* 여기서 설정한 title은 key, REACT는 value*/}
            <Nav first="html" second="css" third="js"></Nav>
            <Article title="Welcome" body="Hello, WEB"></Article>
            {/* 여기의 태그 하나에 props는 하나임 */}
        </div>
    )
}

export default Outperform;