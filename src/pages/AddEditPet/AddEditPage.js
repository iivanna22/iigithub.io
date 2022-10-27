import { useEffect, useState} from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import { Formik, Form, useField, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import yourPetService from '../../services/yourPetService';
import './AddEditPage.css';

const errorMessage = (meta) => {
  return  meta.touched && meta.error ? (
    <div className="error">{ meta.error } </div>
  ) : null
}

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const setValueInput = value => {
    setFieldValue(props.name, value)
  }

  const getTextInput = () => {
    if (props.as === 'textarea') {
      return <textarea { ...field } { ...props } />
    } else {
      return <input { ...field } { ...props } />
    }
  }
  
  return (
    <>
      <div className='block-label-and-button'>
        <label htmlFor={ props.name }> { label } </label>
        <button onClick={ () => setValueInput('') } type='button' className="btn-close" value="Очистить"> </button>
      </div>
      { getTextInput() }
      { errorMessage(meta) }
    </>
  );
};


const MyImage = ( { label, ...props } ) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={ props.name }> { label } </label>
      <img { ...field } { ...props } src= { field.value || props.img } />
    </>
  );
};

const MyCheckbox = ( { children, ...props } ) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" { ...field } { ...props } />
        { children }
      </label>
      { errorMessage(meta) }
    </>
  );
};

const PetForm = () => {
  const [petState, setPetState] = useState({});

  useEffect( () => {
    getItems();
  }, [] )

  const navigate = useNavigate();
  const checkUrlId = useMatch('/edit-pet/:id');

  const { postPet, getPetData, editPet } = yourPetService();

  const getItems = () => {
    checkUrlId ? (
      getPetData(checkUrlId.params.id)
        .then( res => {
          setPetState(res)
        })
    ) : null
  };
  
  const formSelection = () => {
    return petState?.id ? { ...petState, terms: false } : {
      url: '',
      name: '',
      age: 0.0,
      kind: '',
      description: '',
      terms: false
    }
  };

  const goHome = () => {
    navigate('/', {replace: true});
  };

  const cardTitle = () => checkUrlId ? `Edit pet details ${ petState.name }` : 'Add a new pet';
  const cardButton = () => checkUrlId ? 'Edit' : 'Send';

  return (
    <Formik 
      enableReinitialize={ true }
      initialValues = { formSelection() }
      validationSchema = { Yup.object( {
        url: Yup.string()
          .matches('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
            'Enter correct url!')
          .required('Required field!'),
        name: Yup.string()
          .min(2, 'Minimum 2 characters to fill')
          .required('Required field!'),
        age: Yup.string()
          .required('Required field'),
        kind: Yup.string()
          .required('Choose a view'),
        description: Yup.string()
          .min(10, 'At least 10 characters'),
        terms: Yup.boolean()
          .required('Consent required')
          .oneOf([true], 'Consent required')
      })}
      
      onSubmit = { values => {
        (checkUrlId ? editPet(petState.id, values) : postPet(values))
          .then( () => {
            goHome();
          })
      }}
    >
      <Form className="form">
        <div className='text-form'>
          <h2 className='title-block'> { cardTitle() } </h2>
          <hr/>
          <MyImage
            className="img-form"
            label="When you add the link below, the picture should change."
            id="img"
            name="url"
            img= 'https://media.istockphoto.com/photos/dog-paw-and-human-hand-are-doing-handshake-picture-id514774209?k=20&m=514774209&s=170667a&w=0&h=-j_YWzayJ5-YWigDpcRXgE93yUb8MCAgyzKC0SR6_LU='
          />
          <MyTextInput
            label="Link for photo"
            id="url"
            name="url"
            type="text"
            placeholder="Please enter image link"
            as="input"
          />
          <MyTextInput
            label="Name pet"
            id="name"
            name="name"
            type="text"
            placeholder="Please enter pet name"
            autoComplete="off"
            as="input"
          />
          <label htmlFor="age"> Age pet </label>
          <Field
            type="month"
            format = "Month-yyyy"
            name="age" 
            id="age"
            min="01-2000"
            max= "12-2022"
          />
          <ErrorMessage component="div" className="error" name="age"/>
          <label htmlFor="kind"> Kind </label>
          <Field 
            className="kind-form"
            id="kind"
            name="kind"
            as="select"
          >
            <option value="pet"> Choose a pet type </option>
            <option value="dog"> Dog </option>
            <option value="cat"> Cat </option>
            <option value="parrot"> Parrot </option>
          </Field>
          <ErrorMessage component="div" className="error" name="kind"/>
          <MyTextInput
            className="description"
            label="Description"
            id="text"
            name="description"
            as="textarea"
            placeholder="Please enter pet description"
          />
          <MyCheckbox 
            name="terms" 
            className="checkbox">
            Do you agree with the privacy policy?
          </MyCheckbox>
          <div className="buttons-form">
            <button className="button-cansel" type="button" onClick={ () => goHome() }> Cansel </button>
            <button className="button-submit" type="submit"> { cardButton() } </button>
          </div>
        </div>
      </Form>
    </Formik>    
  )
}

export default PetForm;