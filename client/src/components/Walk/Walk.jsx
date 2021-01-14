import { useEffect, useState, useContext } from "react"
import { MDBIcon, MDBAnimation, MDBBtn } from "mdbreact"
import SectionA from '../SectionA/SectionA'
import SectionB from '../SectionB/SectionB'
import PopUp from './PopUp/PopUp'
import toTitleCase from "../../functions/toTitleCase"
import { WalksContext } from "../../context/WalksContext"
import PrivacyPopUp from "../../components/PopUp/PopUp"
import { LoginContext } from "../../context/LoginContext"
import './Walk.css'

const Walk = ({match}) => {

  const [togglePopUp, setTogglePopUp] = useState(false)

  const handleClick = () => {
    setTogglePopUp(!togglePopUp)
  }

  const { walks, isLoading } = useContext(WalksContext)
  const { popupVisible } = useContext(LoginContext)

  const walkName = toTitleCase(match.url.replace("/walks/", "").replace(/-/g, " "))

    useEffect(() => {
        window.scrollTo(0, 0);
      });

      let walk = "loading";

      if (!isLoading) {

        let selectedWalk = walks.filter((walk) => walk.walk === walkName)
        selectedWalk = selectedWalk[0]

        if (selectedWalk === undefined) {
          walk = "walk not found"
        } else {
            walk = 
            <div>
            <div className="walk-heading-container">
              <h1 className="walk-heading display-font">{`${selectedWalk.walk} -- ${selectedWalk.city}`}</h1>
              <p>{selectedWalk.description}</p>
              <p>Starting Point: {selectedWalk.startingPoint}</p>
            </div>
              <SectionA content={selectedWalk.content1} img={selectedWalk.img1} alt={selectedWalk.walk}/>
              <SectionB content={selectedWalk.content2} img={selectedWalk.img2} alt={selectedWalk.walk}/>
              <SectionA content={selectedWalk.content3} img={selectedWalk.img3} alt={selectedWalk.walk}/>
              <div className="author-info-container">
                <p>This walk was written by {selectedWalk.author}</p>
                <p>{selectedWalk.aboutTheAuthor}</p>
                <p>Connect with {selectedWalk.author.split(" ")[0]}!</p>
                <MDBAnimation reveal type="rubberBand">
                  <div className="social-links">
                    {selectedWalk.websiteLink !== undefined && <a href={selectedWalk.websiteLink} target="_blank"><MDBIcon icon="laptop" /></a>}
                    {selectedWalk.facebookLink !== undefined && <a href={selectedWalk.facebookLink} target="_blank"><MDBIcon fab icon="facebook" /></a>}
                    {selectedWalk.instagramLink !== undefined && <a href={selectedWalk.instagramLink} target="_blank"><MDBIcon fab icon="instagram" /></a>}
                    {selectedWalk.twitterLink !== undefined && <a href={selectedWalk.twitterLink} target="_blank"><MDBIcon fab icon="twitter" /></a>}
                  </div>
                </MDBAnimation>
                <MDBBtn id="see-map-btn" onClick={handleClick} >
                {togglePopUp ? "Unsee Map" : "See Map" } <MDBIcon icon="map-marked-alt" />
                </MDBBtn>
                {togglePopUp && <PopUp mapImg={selectedWalk.mapImg} handleClick={handleClick}/>}
              </div>
          </div>
        }
      }


    return (
      <div data-testid="walk-page">
        {popupVisible && <PrivacyPopUp/>}
        <div className="min-page-height center">
          {walk}
        </div>
      </div>
    )
}

export default Walk