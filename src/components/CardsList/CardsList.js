import './CardsList.css';
import { getAllPets } from '../../services/YourPetService'; 

import log from './../../assets/img/wallpaper.jpg'
import {useEffect, useState } from 'react';



const CardsList = () => {
  const [allPetsState, setAllPetsState] = useState([]);

  const getAllData = async () => {
    const res = await getAllPets();
    setAllPetsState(res)
  }
  
  useEffect(() => {
    getAllData();

    // Example Directly
    // axios.get('http://localhost:3000/all_pet').then((resp) => {
    //   const allPets = resp.data;
    //   setAllPetsState(allPets);
    // });
  }, [])

  if (!allPetsState || allPetsState.length === 0) return <p>Нет данных.</p>


  return (
    <li className='list-card'>
      <div className='list-card'>
        {allPetsState.map((resp) =>
          <div className="card" key={resp.id}>
            <img src={log} className="bd-placeholder-img card-img-top" width="100%" height="210">
            </img>
            <div className="card-body">
              <div className='card-text'>
                <h5 className="card-title">{resp.name}</h5>
                <p className='card-text'> {resp.age}months</p>
                <p className='card-text'>{resp.kind}</p>
                <p className='card-text less'>{resp.description}</p>

                <div className='icons-card'>
                  <i className="bi bi-pencil-square icon"></i>
                  <i className="bi bi-trash3-fill icon"></i>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*<div className="card">*/}
        {/*  <img src={log} className="bd-placeholder-img card-img-top" width="100%" height="210">*/}
        {/*  </img>*/}
        
        {/*  <div className="card-body">*/}
        {/*    <div className='card-text'>*/}
        {/*      <h5 className="card-title">Archie</h5>*/}
        {/*      <p className='card-text'>0.2 months</p>*/}
        {/*      <p className='card-text'>dog</p>*/}
        {/*      <p className='card-text less'>Since ancient times, dogs have proudly carried the title of first friend.</p>*/}
        {/*      <div className='icons-card'>*/}
        {/*        <i className="bi bi-pencil-square icon"></i>*/}
        {/*        <i className="bi bi-trash3-fill icon"></i>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        
        
      </div>
    </li>
  );
}

export default CardsList;
