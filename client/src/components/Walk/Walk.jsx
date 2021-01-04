import { useEffect } from "react"
import { MDBIcon } from "mdbreact"
import SectionA from '../SectionA/SectionA'
import SectionB from '../SectionB/SectionB'
import './Walk.css'

const Walk = (props) => {

    const {
      walk, 
      city, 
      description, 
      content1, 
      content2, 
      content3, 
      img1, 
      img2, 
      img3,
      author,
      aboutTheAuthor,
      websiteLink,
      instagramLink,
      facebookLink,
      twitterLink
    } = props

    useEffect(() => {
        window.scrollTo(0, 0);
      });

    return (
    <div>
      <div className="walk-header-container">
        <h1>{`${walk} -- ${city}`}</h1>
        <p>{description}</p>
      </div>
        <SectionA content={content1} img={img1}/>
        <SectionB content={content2} img={img2} />
        <SectionA content={content3} img={img3} />
        <div>
          <p>{author}</p>
          <p>{aboutTheAuthor}</p>
            {websiteLink !== undefined && <a href={websiteLink} target="_blank">Website</a>}
            {facebookLink !== undefined && <a href={facebookLink} target="_blank"><MDBIcon fab icon="facebook" /></a>}
            {instagramLink !== undefined && <a href={instagramLink} target="_blank"><MDBIcon fab icon="instagram" /></a>}
            {twitterLink !== undefined && <a href={twitterLink} target="_blank"><MDBIcon fab icon="twitter" /></a>}
        </div>
    </div>
    )
}

export default Walk