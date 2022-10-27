import './Spinner.css'

const Spinner = () => {

  return (
    <div className='spinner-background'>
      <div className="spinner-border" role="status">
        <span className="visually-hidden"> Loading... </span>
      </div>
    </div>
  )
}

export default Spinner;