import './Walks.css'

const Walks = (props) => {

    const dummyData = ['london', 'new york', 'paris']
    let {searchValue} = props;

    return (
        <div>
            <p>Walks</p>
            <p>{searchValue}</p>
            {/* show all walks if no search query entered, otherwise filter by query */}
             {searchValue === "" ? dummyData : dummyData.filter(city => city.includes(searchValue)) }
        </div>
    )
}

export default Walks

// will need a filter on this page to render the walks -- filter parameter will come either through the search in the navbar or the cities page
// capture form input and pass down to Walks as props