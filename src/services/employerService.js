import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getAll")
    }
    add(values){
        return axios.post("http://localhost:8080/api/employers/add",values)
    }
}