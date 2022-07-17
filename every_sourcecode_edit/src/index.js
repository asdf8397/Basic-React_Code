import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 여기서 ./App은 App.js에서 파일을 가져오는 것
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /* 쉽게말해서 index.js에서는 다른 곳에서 만들어준 것을 
              import해서 가져와서 화면에 쏴주는 공간이라고 생각하면 쉽다. */
  <React.StrictMode>
    <App /> {/** <App/>이라는 태그가 UI 전체이다. 화면*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
