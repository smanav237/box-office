//import { useEffect, useState } from 'react';

import {useParams } from 'react-router-dom';
//The useParams hook returns an object of key/value pairs of the dynamic params
// from the current URL that were matched by the <Route path>

import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';


const Show = () => {
    const {showId} = useParams();
    const {data: showData, error: showError} = useQuery({
      queryKey: ['show',showId],
      queryFn: ()=> getShowById(showId),
    })
    
    if(showError)
    {
      return <div>We have an error: {showError.message}</div>
    }
    if(showData)
    {
      return <div>Got Show data: {showData.name}</div>
    }

  return (
    <div>
        Data is loading {showId}
    </div>
  )
}
export default Show