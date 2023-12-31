import axios from "axios";

const Base_URl ="https://liosatech.com/ghaleb1/Webservice/home_site_landing";

const GetUrl = async () =>{
    const response = await axios.get(Base_URl);
    return response.data 
}

export {GetUrl};