import { MDBBtn, MDBIcon } from "mdbreact"
import { FaArrowAltCircleDown } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import Carousel from '../../Carousel/Carousel'
import SectionA from '../../SectionA/SectionA'
import SectionB from '../../SectionB/SectionB'
import urlify from '../../../functions/urlify'
import './Home.css'

const Home = (props) => {

    const { walks } = props

    let history = useHistory()

    const handleRedirect =(redirectTo) => {
        history.push(`/${redirectTo}`)
    }

    let featuredWalks = walks.filter(walk => walk.featuredWalk === true);

    // if there are less than 3 featured walks set in the db just use the first 3 entries in walks
    if (featuredWalks.length < 3) {
        featuredWalks = walks;
    }

    return (
        <div>
            <Carousel/>
            <div className="page-heading-container featured-walks-heading-container">
                <h2 className="page-heading"><a href="#featured-walk-1" className="featured-walks-link"><FaArrowAltCircleDown className="arrow" /> Featured Walks <FaArrowAltCircleDown className="arrow"/></a></h2>
            </div>
            <hr/>
            <div className="center featured-walks-h3-container" id="featured-walk-1">
                <h3 className="featured-walks-h3">{featuredWalks[0].walk}</h3>
            </div>
            <SectionA content={featuredWalks[0].content1} img={featuredWalks[0].coverImg} alt={featuredWalks[0].walk}/>
            <div className="center">
                <MDBBtn outline color="elegant" className="featured-walks-btn" onClick={() =>handleRedirect(urlify(featuredWalks[0].walk))}>Explore {featuredWalks[0].walk} <MDBIcon icon="walking" /></MDBBtn>
            </div>
            <hr/>
            <div className="center featured-walks-h3-container">
                <h3 className="featured-walks-h3">{featuredWalks[1].walk}</h3>
            </div>
            <SectionB content={featuredWalks[1].content1} img={featuredWalks[1].coverImg} alt={featuredWalks[1].walk}/>
            <div className="center">
                <MDBBtn outline color="elegant" className="featured-walks-btn" onClick={() =>handleRedirect(urlify(featuredWalks[1].walk))}>Explore {featuredWalks[1].walk} <MDBIcon icon="walking" /></MDBBtn>
            </div>
            <hr/>
            <div className="center featured-walks-h3-container">
                <h3 className="featured-walks-h3">{featuredWalks[2].walk}</h3>
            </div>
            <SectionA content={featuredWalks[2].content1} img={featuredWalks[2].coverImg} alt={featuredWalks[2].walk}/>
            <div className="center">
                <MDBBtn outline color="elegant" className="featured-walks-btn" onClick={() =>handleRedirect(urlify(featuredWalks[2].walk))}>Explore {featuredWalks[2].walk} <MDBIcon icon="walking" /></MDBBtn>
            </div>
        </div>
    )
}

export default Home