import { useRequest } from '../hooks/request.hook';

const yourPetService = () => {
  const {loading, request, error, clearError} = useRequest();
  const basicUrl = 'all_pet/';
  const urlId = id => {
    return `all_pet/${id}`
  };
  const headersData = { 'Content-Type': 'application/json' };

  const getAllPets = async () => {
    return await request( basicUrl );
  }

  const deletePet = async id => {
    return await request( urlId(id), 'DELETE');
  }

  const postPet = async data => {
    return await request( basicUrl, 'POST', headersData, data);
  }

  const getPetData = async id => {
    return await request(urlId(id));
  }

  const editPet = async (id, data) => {
    return await request(urlId(id), 'PUT', headersData,  data)
  }

  return { loading, request, error, clearError, getAllPets, deletePet, postPet, getPetData, editPet }
}

export default yourPetService;