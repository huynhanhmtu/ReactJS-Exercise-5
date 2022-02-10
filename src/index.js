import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap CSS
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js'; //Popper.js
import 'bootstrap/dist/js/bootstrap.min.js'; //Bootstrap JS
import { createStore } from "redux"; //Hàm khởi tạo store bằng redux
import { Provider } from 'react-redux'; //Provider giúp connect 2 thư viện với nhau
import { rootReducer } from './redux';

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
