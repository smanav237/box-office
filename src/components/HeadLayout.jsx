import Title from './Title'
import Navs from './Navs'

const HeadLayout = ({children}) => {
  return (
    <div>
    <Title
      title="Box Office"
      subtitle="Are you looking for a movie or an actor?"
    />
    <Navs />

    {children}
  </div>
  )
}

export default HeadLayout