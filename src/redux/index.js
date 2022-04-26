import { combineReducers } from "redux";
import thunk from 'redux-thunk';
import { formReducer } from "./formReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

const rootReducer = combineReducers({
    formReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))
)