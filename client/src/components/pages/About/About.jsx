import { useContext, useEffect } from "react"
import PopUp from "../../PopUp/PopUp"
import { LoginContext } from "../../../context/LoginContext"
import './About.css'

const About = () => {

    const { popupVisible } = useContext(LoginContext)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            {popupVisible && <PopUp/>}
            <div className="page-heading-container min-page-height">
                <h1 className="page-heading">About</h1>
            </div>
        </div>
    )
}

export default About