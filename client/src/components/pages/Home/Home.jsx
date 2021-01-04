import Carousel from '../../Carousel/Carousel'
import SectionA from '../../SectionA/SectionA'
import SectionB from '../../SectionB/SectionB'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Carousel/>
            <div className="page-heading-container">
                <h2 className="page-heading">Featured Walks</h2>
            </div>
            <SectionA/>
            <SectionB/>
            <SectionA/>
        </div>
    )
}

export default Home