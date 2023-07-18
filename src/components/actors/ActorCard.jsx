
const ActorCard = ({name,image,gender,country,birthday,deathday}) => {
  return (
    <div>
    <div>
        <img src = {image} alt={name}/>
    </div>
        <h1>
        {name} {!!gender && `(${gender})`}      {/* !! converts it into boolean so that we can check for its true/false */}
        </h1>
        <p>{country ? `Comes from ${country}` : 'No country known' }</p>

        {!!birthday && <p>Born { birthday} </p>}
        
        <p>{deathday ? 'Died ${deathday}' : 'Alive'}</p>

    </div>
  )
}

export default ActorCard