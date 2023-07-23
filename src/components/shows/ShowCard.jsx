import { Link } from "react-router-dom"

const ShowCard = ({name,image,id,summary}) => {

    // spliting the string into array of words(sparated by spaces) -> extract first 13 words
    // -> join them back to make a string -> replace() will remove any html syntax written in final string

    const shortSummary = summary 
    ? summary.split(' ').slice(0,12).join(' ').replace(/<.+?>/g,'')
    : "No description found"

  return (
    <div>
    <div>
        <img src = {image} alt={name}/>
    </div>
        <h1>{name}</h1>
        <p>{shortSummary}</p>

        <div>
            {/* <Link to={`/show/${id}`} >Read more</Link> */}
            <a href={`/show/${id}`} target="_blank" rel="noreferrer">Read more</a>  {/* opens in new tab */}
            <button type="button">Star me</button>
        </div>

    </div>
  )
}

export default ShowCard