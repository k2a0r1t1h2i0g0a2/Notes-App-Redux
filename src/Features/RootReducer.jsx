
import { combineReducers } from "redux";
import { noteReducer } from "./Reducer";

const RootReducer = combineReducers({
  notes: noteReducer,
});

export default RootReducer;
