import axios from "axios";

export function request(config) {

    const instance = axios.create({
      baseURL : "//152.136.185.210:7878/api/m5",
      timeout:5000
    });

    instance.interceptors.request.use( config =>{
      return config
    },err => {
      alert(err)
    });

  instance.interceptors.response.use(res =>{
    return res.data
  },err => {
    alert(err)
  });


  return  instance(config);

}