import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './TestingCSS';
import Sass from './Sass';
import reportWebVitals from './reportWebVitals';
import Theme from './styles/theme';
import App3 from './UseingState';
import App4 from './UseingState2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Theme>
        <App />
        <br></br>
        <App1 />
        <br></br>
        <Sass />
        <br></br>
        <App3 />
        <br></br>
        <App4 />
      </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
