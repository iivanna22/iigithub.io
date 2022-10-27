import { NavLink } from 'react-router-dom';
import {useState} from 'react';
import './ControlTab.css';

const  ControlTab = props => {
  const buttonsData = [
    { id: 1, name: 'All', kind: 'all' },
    { id: 2, name: 'Dog', kind: 'dog' },
    { id: 3, name: 'Cat', kind: 'cat' },
    { id: 4, name: 'Parrot', kind: 'parrot' },
  ];
  const [arrowChange, arrowStateChange] = useState(false)
  const [activeButton, setActiveButton] = useState(buttonsData[0])

  function onChangeFlag () {
    arrowStateChange(!arrowChange)
  }

  function onRequest () {
    return !arrowChange ? <i className="bi bi-chevron-down"> </i> : <i className="bi bi-chevron-up"> </i>;
  }

  function onFilterSelect (item) {
    setActiveButton(item);
    props.itemSelect(item.kind);
  }

  const buttons = buttonsData.map( item => {
    const active = activeButton.id === item.id;
    const style = active ? 'button-default-list active' : 'button-default-list';

    return (
      <button
        className= { style }
        type='button'
        key= { item.id }
        onClick= { () => onFilterSelect(item) }>
        { item.name }
      </button>
    )
  })

  return (
    <div className='control-block'>
      <div className='button-list'>
        <button className='accordion-item-custom'> <NavLink to='/add-new-pet' className="button-add-card" type='button'> Add new pet </NavLink> </button>
      </div>
      <div className="accordion accordion-flush accordion-custom" id="accordionFlushExample">
        <div className="accordion-item  accordion-item-custom ">
          <div className="accordion-header" id="flush-headingTwo">
            <div className='button-chevron'>
              <div className="button-wrapper">
                <button onClick={ onChangeFlag } className="collapsed accordion-button-custom" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Kind of animal { onRequest() }
                </button>
              </div>
              <div className="accordion-body">
                <div id="flush-collapseTwo" className="accordion-collapse accordion-collapse-custom collapse" aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample">
                  { buttons }
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