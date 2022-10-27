import Card from '../Card/Card';
import {useEffect, useState} from 'react';
import yourPetService from '../../services/yourPetService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import './CardsList.css';

const CardsList = props => {
  const [ allPetsState, setAllPetsState ] = useState([]);
  const [ newItemLoading, setNewItemLoading ] = useState(false);
  const [ activeId, setActiveId ] = useState(null);

  const { loading, error, getAllPets, deletePet } = yourPetService();

  useEffect(() => {
    onRequest(true)
  }, [ props.kindItem ] )

  const getItems = () => {
    getAllPets()
      .then(res => {
        if (props.kindItem === 'all') {
          setAllPetsState(res)
        } else {
          filterKindItem(res, props.kindItem)
        }
      })
  }

  const filterKindItem = (res, item) => {
    const filterKind = res.filter(res => res.kind === item)
    setAllPetsState(filterKind)
  }

  const onRequest = initial => {
    initial ? setNewItemLoading(false) :  setNewItemLoading(true);
    getItems()
  }

  const handleShowModal = id => {
    setActiveId(id);
  }

  const deleteCardMethod = () => {
    deletePet(activeId)
      .then(() => {
        getItems()
      })
  }

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading && !newItemLoading ? <Spinner/> : null;

  const openModal = <>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel"> Confirmation! </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this card?
            The data cannot be returned.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Cancel </button>
            <button onClick={ deleteCardMethod } type="button" className="btn btn-primary" data-bs-dismiss="modal"> Delete </button>
          </div>
        </div>
      </div>
    </div>
  </>;

  return (
    <div className='common-block'>
      <div  className='cards-list-block'>
        { spinner }
        { errorMessage }
        { openModal }
        <div>
          <li className='list-card'>
            {
              allPetsState.map(resp => {
                return ( <Card key={ resp.id }  getOpenModal={ handleShowModal } item={ resp } /> )
              })
            }
          </li>
        </div>
      </div>
      <div className='footer-block'>
        <div className='contacts'>
          <p> + 38(050) 366 17 93  - Elena (manager) </p>
          <p> + 38(096) 366 00 03  - Anna (administrator) </p>
          <p> youpets.2022@gmail.com - email</p>
        </div>
      </div>
    </div>
  );
}

export default CardsList;