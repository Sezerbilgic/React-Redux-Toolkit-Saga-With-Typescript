import { all } from "redux-saga/effects";
import watchAuth from "../features/auth/authSagas";

export default function* rootSaga() {
  yield all([
    watchAuth()
  ]);
}