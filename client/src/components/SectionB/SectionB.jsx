import { MDBView } from "mdbreact"
import marked from "marked"
import "./SectionB.css";

const SectionB = (props) => {

    const {content, img, alt} = props

    const createMarkup = (markup) => {
      return {__html: marked(markup)}
    }

  return (
    <div className='section-b grid-container-b'>
        <div className='grid-item-b grid-item-b-image-box'>
          <MDBView hover zoom>
            <img className="grid-item-b-img" src={img} alt={alt}></img>
          </MDBView>
        </div>
        <div className='grid-item-b grid-item-b-text-box'>
            <div  dangerouslySetInnerHTML={createMarkup(content)}></div>
        </div>
    </div>
  );
};

export default SectionB