import { createStore } from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import rootReducer from "../services/rootReducer";



export function configureStore(){
    return createStore(rootReducer,devToolsEnhancer())
}