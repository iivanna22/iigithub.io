import {useState} from 'react';
import './ControlTab.css';
import './basicStyles.css';


const  ControlTab = () => {

  const buttonsData = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Dog'},
    {id: 3, name: 'Cat'},
    {id: 4, name: 'Parrot'},

  ];

  const [arrowChange, arrowStateChange] = useState(false)
  const [acvitBatton, setAcvitBatton] = useState(buttonsData[0])

  function onChangeFlag() {
    arrowStateChange(!arrowChange)
  }

  function onRequest() {
    return !arrowChange ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-up"></i>;
  }

  function onFilterSelect (item) {
    setAcvitBatton(item);
  }

  const buttons = buttonsData.map((item) => {
    const active = acvitBatton.id === item.id;
    const clazz = active ? 'button-default-list active' : 'button-default-list';
    return (
      <button
        className={clazz}
        type='button'
        key={item.id}
        onClick={() => onFilterSelect(item)}>
        {item.name}
      </button>
    )
  })

  return (
    <div className='control-block'>
      <div className='button-list'>
        <button type="button" className="button-default">Add new pet</button>
      </div>
      <div className="accordion accordion-flush accordion-custom" id="accordionFlushExample">
        <div className="accordion-item  accordion-item-custom ">
          <div className="accordion-header" id="flush-headingTwo">
            <div className='button-chevron'>
              <div className="button-wrapper">
                <button onClick={onChangeFlag} className="collapsed accordion-button-custom" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Kind of animal {onRequest()}
                </button>
              </div>
              <div className="accordion-body">
                <div id="flush-collapseTwo" className="accordion-collapse accordion-collapse-custom collapse" aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample">
                  {buttons}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ControlTab;


