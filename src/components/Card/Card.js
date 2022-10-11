import './Card.css';


const Card = (props) => {

  // const { deleteCard } = yourPetService();
  //
  // const [activeModal, setActiveModal] = useState(false);
  //
  // const handleClose = () => setActiveModal(false);
  // const handleShow = () => setActiveModal(true);
  //
  //
  // const deleteCardMethod = () => {
  //   deleteCard(requisite.item.id)
  //     .then( () => {
  //       requisite.element()
  //     }
  //     )
  // }



  return (
    // <div>
    <div className='card'>
      <div className="card-photo" key={props.item.id}>
        <img src={props.item.picture} alt="" className="bd-placeholder-img card-img-top" width="100%" height="210">
        </img>
        <div className="card-body">
          <div className='card-text'>
            <h5 className="card-title">{props.item.name}</h5>
            <p className='card-text'> {props.item.age} years </p>
            <p className='card-text less'>{props.item.description}</p>

            <div className='icons-card'>
              <i className="bi bi-pencil-square icon"></i>
              <i onClick={() => {props.getOpenModal(props.item.id)}} className="bi bi-trash3-fill icon" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card;
