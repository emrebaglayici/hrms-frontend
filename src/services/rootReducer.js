import { combineReducers } from "redux";
import postReducer from "../store/reducers/postReducer";


const rootReducer=combineReducers({
    post:postReducer,
})

export default rootReducer;