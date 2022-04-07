import axios from 'axios'

import { config } from '../config';

// getting array all id for get
export async function getAllIds(){
  const data = await getAll(config.urlApi, 'products')
  return data.map(element => {
    return {
      params: {
        id: element.id.toString()
      } 
    }
  });
}
// getting all item
export  async function getAll(url, path){
  try{
    const responce = await axios.get(`${url}/${path}`);
    // console.log('res', responce.data)
    return responce.data;
  }catch(error){
    console.log(error)
  }
}
// getting item by id
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