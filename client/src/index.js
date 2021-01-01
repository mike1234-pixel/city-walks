import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./container/App.jsx";
import registerServiceWorker from './registerServiceWorker';
import axios from "axios"

axios.get("http://localhost:5000/walks").then((walksData) => {
ReactDOM.render(<App walks={walksData.data}/>, document.getElementById('root'));
})

registerServiceWorker();