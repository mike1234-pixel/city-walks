import { useEffect, useState, useContext } from "react"
import Nav from '../../components/Nav/Nav'
import Home from '../../components/pages/Home/Home'
import Cities from '../../components/pages/Cities/Cities'
import Walks from '../../components/pages/Walks/Walks'
import About from '../../components/pages/About/About'
import Contact from '../../components/pages/Contact/Contact'
import LoginPage from '../../components/pages/LoginPage/LoginPage'
import Admin from '../../components/pages/Admin/Admin'
import NotFound404 from '../../components/pages/404/NotFound404'
import Footer from '../../components/Footer/Footer'
import Walk from '../../components/Walk/Walk'
import Threads from '../../components/pages/LoginPage/LoggedInView/Components/Threads/Threads'
import urlify from '../../functions/urlify'
import { BrowserRouter, Route, Switch } from "react-router-dom"

const Router = (props) => {

    const {walks, cities} = props
    
    const [newRoutes, setNewRoutes] = useState("");

  useEffect(() => {

    const createRoutes = () => {
      let results = walks.map((walk, index) => (
        <Route
          exact
          path={`/${urlify(walk.walk)}`}
          key={index}
          render={() => 
          <Walk 
            walk={walk.walk} 
            city={walk.city} 
            description={walk.description}
            startingPoint={walk.startingPoint} 
            content1={walk.content1} 
            content2={walk.content2} 
            content3={walk.content3}
            mapImg={walk.mapImg} 
            img1={walk.img1} 
            img2={walk.img2} 
            img3={walk.img3}
            author={walk.author}
            aboutTheAuthor={walk.aboutTheAuthor}
            websiteLink={walk.websiteLink}
            instagramLink={walk.instagramLink}
            facebookLink={walk.facebookLink}
            twitterLink={walk.twitterLink}
            />} // pass data as props to Walk
        />
      ));
      setNewRoutes(results);
    };
    createRoutes();
  }, [walks]); // only re-run the effect if data changes


    return (
        <BrowserRouter>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={() => <Home walks={walks}/>} />
            <Route path="/cities" component={() => <Cities cities={cities}/>} />
            <Route path="/walks" component={() => <Walks walks={walks}/>}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* the render method here ensures the inputs in the forms don't lose focus */}
            {/* https://www.xspdf.com/resolution/59715158.html */}
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="/threads" render={() => <Threads />}/>
            <Route path="/admin" component={Admin} />
            <Route path="/boards/:board" component={Threads}/>
            {newRoutes}
            <Route component={NotFound404} />
          </Switch>
          <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default Router