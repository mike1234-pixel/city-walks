import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./container/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render( <Provider store={store}><App /></Provider> , document.getElementById('root'));

registerServiceWorker();