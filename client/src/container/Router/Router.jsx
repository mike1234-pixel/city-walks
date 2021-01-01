import { useEffect, useState } from "react"
import Nav from '../../components/Nav/Nav'
import Home from '../../components/pages/Home/Home'
import Cities from '../../components/pages/Cities/Cities'
import Walks from '../../components/pages/Walks/Walks'
import About from '../../components/pages/About/About'
import Contact from '../../components/pages/Contact/Contact'
import NotFound404 from '../../components/pages/404/NotFound404'
import Footer from '../../components/Footer/Footer'
import Walk from '../../components/Walk/Walk'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import data from '../../components/pages/Walks/dummyData.json'

const Router = (props) => {

    const {handleChange, handleSubmit, searchValue, redirect, setRedirect, handleClick, setSearchValue} = props
    
    const [newRoutes, setNewRoutes] = useState("");

  // useEffect runs after every render by default, 
  // this should however only run once on first render. 
  useEffect(() => {
    const createRoutes = () => {
      let results = data.walks.map((walk, index) => (
        <Route
          exact
          path={`/${walk.route}`}
          key={index}
          render={() => <Walk walk={walk.walk} city={walk.city} description={walk.description} content1={walk.content_1} content2={walk.content_2} content3={walk.content_3} img1={walk.img_1_link} img2={walk.img_2_link} img3={walk.img_3_link}/>} // pass data as props to Walk
        />
      ));
      setNewRoutes(results);
    };

    createRoutes();
  }, [data]); // only re-run the effect if data changes

    return (
        <BrowserRouter>
        <div>
          <Nav 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              searchValue={searchValue}
              redirect={redirect}  
              setRedirect={setRedirect}
              />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cities" component={() => <Cities handleClick={handleClick}/>} />
            <Route path="/walks" component={() => <Walks searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {newRoutes}
            <Route component={NotFound404} />
          </Switch>
          <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default Router