import  error from'./computer.png';

import './errorMessage.css'

const Error = () => {
  return (

    <div className='error-background'>
      <div className='wrapper-error'>
        <div className="alert alert-danger" role="alert">
          <div className='error-button'>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <img className='error_block' src={error} alt="Error"/>
          Sorry, server error!
        </div>
      </div>
    </div>
  // <div className="alert alert-danger" role="alert">
  //     A simple warning alert—check it out!
  // </div>



  )
}

export default Error;