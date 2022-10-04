import Header from '../../components/Header /Header';
import ControlTab from '../../components/ControlTab/ControlTab';
import CardsList from '../../components/CardsList/CardsList';

import './MainPage.css';

const MainPage = () => {

  return (
    <>
      <Header/>
      <div className='main-block'>
        <ControlTab/>
        <CardsList/>
      </div>
    </>
  );
}

export default MainPage;
