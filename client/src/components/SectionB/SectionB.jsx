import "./SectionB.css";

const SectionB = (props) => {

    const {content, img} = props

  return (
    <div className='section-b grid-container-b'>
        <div className='grid-item-b grid-item-b-image-box'>
            <img className="grid-item-b-img" src={img} alt="PLACEHOLDER"></img>
        </div>
        <div className='grid-item-b grid-item-b-text-box'>
            <p>{content}</p>
        </div>
    </div>
  );
};

export default SectionB