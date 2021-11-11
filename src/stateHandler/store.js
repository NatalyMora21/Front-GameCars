import { racingReducer } from "./reducers/racingReducer";
import { userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { raceReducer } from "./reducers/raceReducer";


const reducer = combineReducers({
    racing: racingReducer,
    race: raceReducer,
    users: userReducer
})


//Store
export const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
);