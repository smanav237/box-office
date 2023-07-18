import { useState } from "react";
import {searchForShows, searchForPeople} from '../api/tvmaze';
import SearchForm from '../components/SearchForm'
import ShowGrid from "../components/shows/ShowGrid";
import ActorGrid from "../components/actors/ActorGrid";

const Home = () =>{
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({q,searchOption}) => {
    try {
      setApiDataError(null);
      
      let result;
      if(searchOption === 'shows'){
        result = await searchForShows(q);
      }
      else{
        result = await searchForPeople(q);
      }
      setApiData(result);

    } catch (error) {
      setApiDataError(error)
    }
  
  };


const renderApiData = () => {
  if(apiDataError)
  {
      return <div>Error occured: {apiDataError.message}</div>
  }

  if(apiData?.length == 0)           // OPTIONAL CHAININNG
  {                                   // will show the message if not able to found search word(instead of just breaking the app and givin error)
    return <div>No results</div>
  }
  if(apiData)
  {
    return apiData[0].show                     
    ? ( <ShowGrid shows={apiData}/> )
    : ( <ActorGrid actors = {apiData}/> )
  }
  return null        // else if(!apiData)

};
  

  return(
    <div>
      <SearchForm onSearch={onSearch}/>
      <div>{renderApiData()}</div>
    </div>
  )

}

export default Home