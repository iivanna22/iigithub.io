import { useNavigate } from 'react-router-dom';
import img from '../../assets/img/error.jpg';
import './Error404Page.css';

const Error404Page = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };
  
  return (
    <div className='error-page'>
      <button type="button" className="btn-warning" onClick={ () => goHome() } > Сome back </button>
      <img className='error-img-page' src={img} alt="Error"/>
    </div>
  )
}

export default Error404Page;