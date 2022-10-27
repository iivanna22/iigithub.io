import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import AddEditPage from '../../pages/AddEditPet/AddEditPage';
import Error404Page from '../../pages/Error404/Error404Page';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/add-new-pet' element={<AddEditPage/>}/>
          <Route path='/edit-pet/:id' element={<AddEditPage/>}/>
          <Route path='*' element={<Error404Page/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;