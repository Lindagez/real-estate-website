import { API } from "../../config";
export const signup = (user)=>{
    // console.log(firstName ,lastName ,password,
    //      confirmPassword,country,
    //     gender,email,phone)
  return fetch(`${API}/auth/signup`,
   {
    method:"POST",
    headers:{
        Accept:'application/json',
        "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
      
   }) 
   .then(response =>{
    return response.json()
   })
   .catch(err => {
    console.log(err);
   })  
}

export const signin = (user)=>{
    // console.log(firstName ,lastName ,password,
    //      confirmPassword,country,
    //     gender,email,phone)
  return fetch(`${API}/auth/signin`,
   {
    method:"GET",
    headers:{
        Accept:'application/json',
        "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
      
   }) 
   .then(response =>{
    return response.json()
   })
   .catch(err => {
    console.log(err);
   })  
}

export const authenticate = (data,next) =>{
    if(typeof eindow != 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next();
    }
};

export const signout = (next) =>{
    if(typeof eindow != 'undefined'){
        localStorage.removeItem('jwt')
        next();
        return fetch(`${API}/signout`,{
            method:"GET",
        })
    .then(response => {
        console.log('signout',response)
    })
   .catch(err=>console.log(err))    
}  
}