import Nav from '../../components/Nav/Nav'
import Home from '../../components/pages/Home/Home'
import Cities from '../../components/pages/Cities/Cities'
import Walks from '../../components/pages/Walks/Walks'
import About from '../../components/pages/About/About'
import Blog from "../../components/pages/Blog/Blog"
import BlogPost from "../../components/pages/BlogPost/BlogPost"
import Contact from '../../components/pages/Contact/Contact'
import LoginPage from '../../components/pages/LoginPage/LoginPage'
import Admin from '../../components/pages/Admin/Admin'
import NotFound404 from '../../components/pages/404/NotFound404'
import PrivacyPolicy from "../../components/pages/PrivacyPolicy/PrivacyPolicy"
import Footer from '../../components/Footer/Footer'
import Walk from '../../components/Walk/Walk'
import Threads from '../../components/pages/LoginPage/LoggedInView/Components/Threads/Threads'
import { BrowserRouter, Route, Switch } from "react-router-dom"

const Router = (props) => {

    const {walks, cities, blogPosts} = props

    return (
        <BrowserRouter>
          <Nav/>
          <Switch>
            <Route exact path="/" component={() => <Home walks={walks}/>} />
            <Route path="/cities" component={() => <Cities cities={cities}/>} />
            <Route exact path="/walks" component={() => <Walks walks={walks}/>}/>
            <Route path="/walks/:walks" component={Walk}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/blog" component={() => <Blog blogPosts={blogPosts}/>} />
            <Route path="/blog/:blogpost" component={BlogPost} />
            {/* the render method here ensures the inputs in the forms don't lose focus */}
            {/* https://www.xspdf.com/resolution/59715158.html */}
            <Route exact path="/boards" render={() => <LoginPage />} />
            <Route path="/boards/:board" component={Threads}/>
            <Route path="/admin" component={Admin} />
            <Route path="/privacy" component={PrivacyPolicy}/>
            <Route component={NotFound404} />
          </Switch>
          <Footer/>
        </BrowserRouter>
    )
}

export default Router