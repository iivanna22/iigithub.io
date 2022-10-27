import { useState } from 'react';
import Header from '../../components/Header /Header';
import ControlTab from '../../components/ControlTab/ControlTab';
import CardsList from '../../components/CardsList/CardsList';
import './MainPage.css';

const MainPage = () => {
  const [kindItem , setKindItem] = useState('all');

  function itemSelect (i) {
    setKindItem(i);
  }
    
  return (
    <div className='main-page'>
      <Header/>
      <div className='main-block'>
        <ControlTab itemSelect= { itemSelect } />
        <div className='cards-list-block'>
          <CardsList kindItem= { kindItem } />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
