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
import { ForumContextProvider } from "./context/ForumContext"
import { WalksContextProvider } from "./context/WalksContext"
import { BlogsContextProvider } from "./context/BlogsContext"

const requestOne = axios.get('http://localhost:5000/walks');
const requestTwo = axios.get('http://localhost:5000/cities');
const requestThree = axios.get('http://localhost:5000/boards');
const requestFour = axios.get('http://localhost:5000/blog');

axios
  .all([requestOne, requestTwo, requestThree, requestFour])
  .then(
    axios.spread((...responses) => {
      const walksData = responses[0];
      const citiesData = responses[1];
      const boardsData = responses[2];
      const blogPosts = responses[3];
      ReactDOM.render(
        <ForumContextProvider>
          <RecaptchaContextProvider>
            <LoginContextProvider>
              <SearchContextProvider>
                <WalksContextProvider>
                  <BlogsContextProvider>
                    <App walks={walksData.data} cities={citiesData.data} boards={boardsData} blogPosts={blogPosts.data}/>
                  </BlogsContextProvider>
                </WalksContextProvider>
              </SearchContextProvider>
            </LoginContextProvider>
          </RecaptchaContextProvider>
        </ForumContextProvider>
      , document.getElementById('root'));
    })
  )
  .catch(errors => {
    console.error(errors);
  });

registerServiceWorker();