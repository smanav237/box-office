import { useState } from "react";
import {SearchForShows, SearchForPeople} from '../api/tvmaze';
import SearchForm from '../components/SearchForm'

const Home = () =>{
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({q,searchOption}) = {
    try {
      setApiDataError(null);
      let result;
      
      if(searchOption === 'shows'){
        result = await searchForShows(q);
      }
      else{
        result = await SearchForPeople(q);
      }

    } catch (error) {
      setApiDataError(error)
    }
  }


const renderApiData = () => {
  if(apiDataError)
  {
      return <div>Error occured: {apiDataError.message}</div>
  }

  if(apiData)
  {
    return apiData[0].show
    ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
    : apiData.map(data => (<div key={data.person.id}>{data.person.name}</div>))
  }
  return null        // else

};
  

  return(
    <div>
      <SearchForm onSearch={onSearch}/>
      <div>{renderApiData()}</div>
    </div>
  )

}

export default Home