import axios from "axios";

export default class JobTitleService {

    add(values) {
        return axios.post("http://localhost:8080/api/jobPositions/add", values);
    }

   

    getAll() {
        return axios.get("http://localhost:8080/api/jobPositions/getall");
    }

}