import { MDBView } from "mdbreact"
import "./SectionA.css"

const SectionA = (props) => {

    const {content, img, alt} = props

  return (
    <div className='section-a grid-container-a'>
        <div className='grid-item-a grid-item-a-text-box'>
            <p>{content}</p> 
        </div>
        <div className='grid-item-a grid-item-a-image-box'>
          <MDBView hover zoom>
            <img className="grid-item-a-img" src={img} alt={alt}></img>
          </MDBView>
        </div>
    </div>
  );
};

export default SectionA

// content: no more than 570 characters