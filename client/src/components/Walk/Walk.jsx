import { useEffect } from "react"
import SectionA from '../SectionA/SectionA'
import SectionB from '../SectionB/SectionB'
import './Walk.css'

const Walk = (props) => {

    const {walk, city, description, content1, content2, content3, img1, img2, img3} = props

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
    </div>
    )
}

export default Walk