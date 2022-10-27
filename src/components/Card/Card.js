import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = props => {
  const navigate = useNavigate();

  const editCardPet = () => {
    navigate(`/edit-pet/${ props.item.id }`, { replace: true });
  };

  return (
    <div className='card'>
      <div className="card-photo" key={ props.item.id  }>
        <img src={ props.item.url } alt=" " className="bd-placeholder-img card-img-top">
        </img>
        <div className="card-body">
          <div className='card-text'>
            <h5 className="card-title">{ props.item.name }</h5>
            <p className='card-text'> Date of Birth: { props.item.age }  </p>
            <p className='card-text less'>{ props.item.description }</p>

            <div className='icons-card'>
              <i  onClick={ () => editCardPet (props.item.id) } className="bi bi-pencil-square icon"></i>
              <i onClick={ () => { props.getOpenModal (props.item.id) } } className="bi bi-trash3-fill icon" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;