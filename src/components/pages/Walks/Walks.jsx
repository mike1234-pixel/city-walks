import './Walks.css'

const Walks = (props) => {

    const dummyData = ['london', 'new york', 'paris']
    let {searchValue} = props;

    // filter walks by query,
    // if nothing entered, show all walks, 
    // if value entered but no match, show 'No matches found'

    if (searchValue === "") {
    return (
        <div>
            <p>Walks</p>
            <p>{searchValue}</p>
            <p>{dummyData}</p>
        </div>
    )
    } else if (dummyData.filter(city => city.includes(searchValue)).length !== 0) {
        return (
        <div>
            <p>Walks</p>
            <p>{searchValue}</p>
            <p>{dummyData.filter(city => city.includes(searchValue))}</p>
        </div>
        )
    } else {
        return (
        <div>
            <p>Walks</p>
            <p>{searchValue}</p>
            <p>No matches found</p>
        </div>
        )
    }
}

export default Walks
