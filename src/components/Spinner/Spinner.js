const Spinner = () => {
  return (
    <div className="spinner-border text-warning" role="status" style={{width:'90px', height:'90px', margin: '0 auto', display: 'block'}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default Spinner;