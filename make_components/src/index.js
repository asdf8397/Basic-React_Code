import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { One } from './Other_way';
import App_change from './Another_way';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // 이부분에서는 화면에 뿌려주는 부분
  <React.StrictMode>
    <div>
      <One/>
      <App />
    </div>
    <div>
      <App_change/>
    </div>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
