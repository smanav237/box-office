//import { useEffect, useState } from 'react';

import {Link,useParams } from 'react-router-dom';
//The useParams hook returns an object of key/value pairs of the dynamic params
// from the current URL that were matched by the <Route path>

import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Cast from '../components/shows/Cast';
import Seasons from '../components/shows/Seasons';


const Show = () => {
    const {showId} = useParams();
    const {data: showData, error: showError} = useQuery({
      queryKey: ['show',showId],
      queryFn: ()=> getShowById(showId),
      refetchOnWindowFocus: false,
    })
    
    if(showError)
    {
      return <div>We have an error: {showError.message}</div>
    }
    if(showData)
    {
      return <div>
      <Link to="/">Go back to home</Link>
      
        <ShowMainData 
          image = {showData.image}
          name = {showData.name}
          rating = {showData.rating}
          summary = {showData.summary}
          genres = {showData.genres}
        />
        
        <div>
          <h2>details</h2>
          <Details
            status = {showData.status}
            premiered = {showData.premiered}
            network = {showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons = {showData._embedded.seasons}/>
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast = {showData._embedded.cast}/>
        </div>
      </div>
    }

  return (
    <div>
        Data is loading {showId}
    </div>
  )
}
export default Show