import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import AddNewCard from '../../pages/AddNewCard/AddNewCard';
import Error404 from '../../pages/Error404/Error404';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/add-new-page' element={<AddNewCard/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
