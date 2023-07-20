import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {searchForShows, searchForPeople} from '../api/tvmaze';
import SearchForm from '../components/SearchForm'
import ShowGrid from "../components/shows/ShowGrid";
import ActorGrid from "../components/actors/ActorGrid";

const Home = () =>{
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({q,searchOption}) => {
    setFilter({ q, searchOption });
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