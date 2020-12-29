import './Walks.css'

const Walks = (props) => {

    return (
        <div>
            <p>Walks</p>
            <p>{props.searchValue}</p>
        </div>
    )
}

export default Walks

// will need a filter on this page to render the walks -- filter parameter will come either through the search in the navbar or the cities page
// capture form input and pass down to Walks as props