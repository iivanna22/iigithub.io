import './CardsList.css';
import Card from '../Card/Card';
import {useEffect, useState} from 'react';
import yourPetService from '../../services/yourPetService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
// {getAllPets}

const CardsList = () => {
  const [allPetsState, setAllPetsState] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [activeID, setActiveId] = useState(null);


  const { loading, error, getAllPets, deleteCard} = yourPetService();

  useEffect(() => {
    onRequest(true)

    //  getAllData();

    // Example Directly
    // axios.get('http://localhost:3000/all_pet').then((resp) => {
    //   const allPets = resp.data;
    //   setAllPetsState(allPets);
    // });
  }, [] )

  // const getAllData = async () => {
  //   const res = await getAllPets2();
  //   setAllPetsState(res)
  // }

  const onRequest = (initial) => {
    initial ? setNewItemLoading(false) :  setNewItemLoading(true);
    getAllPets()
      .then(res => {
        setAllPetsState(res)
      })
  }


  const handleShow = (id) => {
    setActiveId(id);
  }

  const deleteCardMethod = () => {
    deleteCard(activeID)
      .then(() => {
        getAllPets()
          .then(res => {
            setAllPetsState(res)
          })
      })
  }

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading && !newItemLoading ? <Spinner/> : null;

  const openModal = <div>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Confirmation!</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this card?
            The data cannot be returned.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button onClick={deleteCardMethod} type="button" className="btn btn-primary" data-bs-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>;
  

  return (
    <div>
      {spinner}
      {errorMessage}
      {openModal}

      <li className='list-card'>
        {
          allPetsState.map((resp) => {
            return ( <Card key={resp.id}  getOpenModal={handleShow} item={resp} /> )
          })
        }
      </li>
    </div>
  );
}

export default CardsList;
