import { privateAxios } from "./Helper";

//create
export const saveGame=(games)=>{
    return privateAxios
    .post('/games', games)
    .then((response)=> response.data);
};

//getById
export const getGameById=(gameId)=>{
    return privateAxios
    .get('/games/'+gameId)
    .then((response)=> response.data);
};

//get All
export const getAllGame=()=>{
    return privateAxios
    .get('/games')
    .then((response)=> response.data);
};
