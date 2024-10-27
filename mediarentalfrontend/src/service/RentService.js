import { privateAxios } from "./Helper";

//create
export const rentGame=(gameId, userId,data)=>{
    return privateAxios
    .post('/rentals/rentGame/'+gameId+"/user/"+userId, data)
    .then((response)=> response.data);
};

export const rentMedia=(mediaId, userId,data)=>{
    return privateAxios
    .post('/rentals/rentMedia/'+mediaId+"/user/"+userId, data)
    .then((response)=> response.data);
};


export const getRentalGameOnly=(userId)=>{
    return privateAxios
    .get('/rentals/user/'+userId+"/game")
    .then((response)=> response.data);
};


export const getRentalMediaOnly=(userId)=>{
    return privateAxios
    .get('/rentals/user/'+userId+"/media")
    .then((response)=> response.data);
};


// http://localhost:8080/api/rentals/user/1/game