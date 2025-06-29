import { usersList } from "../model/userModel.js";

export  function handleUsers(req,resp){

    const usersData = usersList();

    console.log(usersData);
    
    resp.render('user',{users:usersData});
}