// import {api} from "../../utils/api"
// import axios from "axios"


// export default async function loginRequest (loginData) {
//     // console.log(api)
//     const header = {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     }
//     try {
//         const response = await axios.post(`http://10.240.212.208:9876/auth/login`, loginData, {header});
//         return await response.json();
//     } catch (error) {
//         return error;
//     }
// }

// export default async function loginRequest (loginData) {
//     console.log(api)
//     const header = {
//         "Content-Type": "application/json",
//     }
//     try {
//         const response = await fetch(`http://10.240.212.208:9876/auth/login`, {
//             method: "POST",
//             header,
//             body: JSON.stringify(oginData),
//         });
//         return response.json();
//     } catch (error) {
//         return error;
//     }
// }