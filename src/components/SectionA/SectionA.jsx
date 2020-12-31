import "./SectionA.css";

const SectionA = (props) => {

    const {content, img} = props

  return (
    <div className='section-a grid-container-a'>
        <div className='grid-item-a grid-item-a-text-box'>
            <p>{content}</p>
        </div>
        <div className='grid-item-a grid-item-a-image-box'>
            <img className="grid-item-a-img" src={img} alt="PLACEHOLDER"></img>
        </div>
    </div>
  );
};

export default SectionA
