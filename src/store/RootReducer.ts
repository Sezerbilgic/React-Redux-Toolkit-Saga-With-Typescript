import { CombinedState, combineReducers, Reducer } from "redux";
import authSlices from "../features/auth/authSlices";
import { IStore } from "./IStore";

const rootReducer: Reducer<CombinedState<IStore>> = combineReducers({
  auth: authSlices
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;