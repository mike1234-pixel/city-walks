import './Walks.css'
import data from './dummyData.json'

const Walks = (props) => {

    let {searchValue} = props

    // filter walks by query,
    // if nothing entered, show all walks, 
    // if value entered but no match, show 'No matches found'
    // if the walk value or the city value in each walk matches the searchValue, show walk

        const walksArr = data.walks

    if (searchValue === "") {
    return (
        <div>
            <p>Walks</p>
            <p>{searchValue}</p>
            {walksArr.map(v => {
                return (
                    <div>
                        <p>{JSON.stringify(v.walk)}</p>
                        <p>{JSON.stringify(v.city)}</p>
                        <p>{JSON.stringify(v.description)}</p>
                        <img src={v.cover_img_link}/>
                    </div>
                    )
            })}
        </div>
    )
    } else if (walksArr.map(v => {v.walk.includes(searchValue) || v.city.includes(searchValue)})) {
        return (
        <div>
            <p>Walks</p>
            <p>{searchValue}</p>
                {walksArr.map(v => {
                if (v.walk.includes(searchValue) || v.city.includes(searchValue)) {
                console.log(v.walk, v.city)
                console.log(JSON.stringify(v.walk))
                return (
                    <div>
                        <p>{JSON.stringify(v.walk)}</p>
                        <p>{JSON.stringify(v.city)}</p>
                        <p>{JSON.stringify(v.description)}</p>
                        <img src={v.cover_img_link}/>
                    </div>
                    )
                }}
                )}
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
