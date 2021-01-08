import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./container/App.jsx";
import registerServiceWorker from './registerServiceWorker';
import axios from "axios"
import { RecaptchaContextProvider } from "./context/RecaptchaContext"
import { SearchContextProvider } from "./context/SearchContext"
import { LoginContextProvider } from "./context/LoginContext"

const requestOne = axios.get('http://localhost:5000/walks');
const requestTwo = axios.get('http://localhost:5000/cities');

axios
  .all([requestOne, requestTwo])
  .then(
    axios.spread((...responses) => {
      const walksData = responses[0];
      const citiesData = responses[1];
      console.log(walksData)
      console.log(citiesData)
      ReactDOM.render(
        <RecaptchaContextProvider>
          <LoginContextProvider>
            <SearchContextProvider>
              <App walks={walksData.data} cities={citiesData.data}/>
            </SearchContextProvider>
          </LoginContextProvider>
        </RecaptchaContextProvider>
      , document.getElementById('root'));
    })
  )
  .catch(errors => {
    console.error(errors);
  });

registerServiceWorker();