import { Outlet } from 'react-router-dom';
import Title from './Title';
import Navs from './Navs';


const HeadLayout = () => {
  return (
    <div>
      <Title />
      <Navs />

      <Outlet />
    </div>
  );
};

export default HeadLayout;