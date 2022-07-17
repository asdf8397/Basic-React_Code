import logo from './logo.svg';
import './App.css';
function One() { // 이부분이 index.js에 들어가게 된다.(컴포넌트)
    return(
        <header>
            <h1><a href="/">안녕</a></h1>
        </header>
    );
}
export{One}; // 이부분이 index.js에 들어가게 된다.