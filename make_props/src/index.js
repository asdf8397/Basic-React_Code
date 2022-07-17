import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Outperform from './type_change';
import OutTypeApp from './type_change_props';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  // index.js에 화면에 찍어줄 코드를 작성한 후 여기에 올려주면 화면에 찍히게 된다.
  <React.StrictMode>
    <App /> {/* props의 원조 */}
    <Outperform/> {/*props로변형시켜볼 파일 */}
    <OutTypeApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
