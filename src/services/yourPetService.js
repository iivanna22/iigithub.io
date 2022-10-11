import {useRequest} from '../hooks/request.hook';

const yourPetService = () => {

  const {loading, request, error, clearError} = useRequest();

  const getAllPets = async () => {
    const res = await request('all_pet');
    return res;
  }

  const deleteCard = async (id) => {
    const res = await request(`all_pet/${id}`, 'DELETE');
    return res;

  }


  return {loading, request, error, clearError, getAllPets, deleteCard}

}

export default yourPetService;


// export const getAllPets2 = async () => {
//   const res = await axios.get(' http://localhost:3000/all_pet');
//   return res.data;
// }

