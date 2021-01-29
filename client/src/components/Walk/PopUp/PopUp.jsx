import './PopUp.css'

const PopUp = (props) => {

    const { mapImg } = props

    return (
        <div className="popup-container">
            <div className="popup">
                {/* orientation will be portrait */}
                <img className="popup-img" src={mapImg}/>      
            </div>
        </div>
    )
}

export default PopUp