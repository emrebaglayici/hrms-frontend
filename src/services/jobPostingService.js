import axios from "axios";

export default class JobPostingService{
    add(values){
        return axios.post("http://localhost:8080/api/employers/add",values)
    }
}