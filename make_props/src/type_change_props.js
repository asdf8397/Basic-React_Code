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
    for(let i = 0; i < props_Header.topics.length; i++) { 
        // 여기서 반복문의 topics는 <Nav topics></Nav>로 설정해준 변수이다.
        /* for 반복문에서 props_Header.topics.length를 설정하는 것은 
        Nav의 설정한 li를 Nav(props_Header)에 담았는데 이 값을 빼주는데 
        변수를 지정한 topics배열만 빼줘야하기 떄문에 .topics라고 해줌 */
        let Nav_input = props_Header.topics[i]; // 반복문을 돌려준 리스트 - 이것을 주로 활용함
        /* let Nav_input을 변수선언하고 props_Header.topics[i]를
            넣은 이유는 function Nav()의 안에 들어가있는 li의 리스트를
            가져와서 topics를 i에 맞게 반복문을 진행줘야 하기 때문이다.
             */
        list_Arr.push(<li key={Nav_input.id}>{Nav_input.title}</li>) // 1번
        list_Arr.push(<li key={Nav_input.id}><a href={"/read/" + Nav_input.id}>{Nav_input.title}</a></li>) // 2번

        /* list_Arr.push의 1번과 2번의 차이는 */
        // 1번은 그냥 출력 ---- id와 title만 간단히 추가
        // 2번은 클릭을 할 수 있게 출력 링크를 추가한 출력이다. --- id와 title a태그를 이용한 read기능을 추가함
        
        // 선언후 list_Arr에 넣음
    }
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

        <ol>
            {list_Arr} 
            {/* 이부분이 return이 되서 Nav()에 담기고 App()부분에서 뿌려지게 된다. */}
        </ol>
    );
}
function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}
function OutTypeApp() {
    const topics = [ 
        /* li를 const topics[] 배열에 넣고 for 반복문을 통해서 출력후
            지정한 변수의 배열에 넣어서 밖으로 빼주면서
            OutTypeApp()의 함수의 Nav에 지정해 줄 수 있음
        */
        {id:1, title:"html", body:"html is ..."},
        {id:2, title:"css", body:"css is ..."},
        {id:3, title:"js", body:"js is ..."}
    ]
    return(
        <div>
            <Header title="안녕하십니까 웹입니다."></Header>
            <Nav topics={topics}></Nav> 
            {/* 여기 Nav */}
            <Article title="안녕하세요요요요" body="안녕 웹입니다."></Article>
        </div>
    );
}
export default OutTypeApp;