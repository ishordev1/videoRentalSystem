import { privateAxios } from "./Helper";

//create
export const saveMedia=(media)=>{
    return privateAxios
    .post('/media', media)
    .then((response)=> response.data);
};

//getById
export const getMediaById=(mediaId)=>{ 
    return privateAxios
    .get('/media/'+mediaId)
    .then((response)=> response.data);
};

//get All
export const getAllMedia=()=>{
    return privateAxios
    .get('/media')
    .then((response)=> response.data);
};
