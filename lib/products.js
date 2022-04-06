import axios from 'axios'

const url = ' http://localhost:3004'

export async function getAllIds(){
  const data = await getAll(url, 'posts')
  return data.map(element => {
    // console.log({params: {
    //   id: element.id.toString()
    // } })
    return {
      params: {
        id: element.id.toString()
      } 
    }
  });
}
export  async function getAll(url, path){
  try{
    const responce = await axios.get(`${url}/${path}`);
    return responce.data;
  }catch(error){
    console.log(error)
  }
}
export async function getById(id, url, path){
  try{
    const responce = await axios.get(`${url}/${path}`,{
      params: {
        id
      }
    });
    return responce.data;
  }catch(error){
    console.log(error)
  }
}