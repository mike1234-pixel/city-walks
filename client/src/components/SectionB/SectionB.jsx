import { MDBView } from "mdbreact"
import "./SectionB.css";

const SectionB = (props) => {

    const {content, img} = props

  return (
    <div className='section-b grid-container-b'>
        <div className='grid-item-b grid-item-b-image-box'>
          <MDBView hover zoom>
            <img className="grid-item-b-img" src={img} alt="PLACEHOLDER"></img>
          </MDBView>
        </div>
        <div className='grid-item-b grid-item-b-text-box'>
            <p>{content}</p>
        </div>
    </div>
  );
};

export default SectionB