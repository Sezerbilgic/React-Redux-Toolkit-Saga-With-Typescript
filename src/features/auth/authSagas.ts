import { IAuthState, IGetRequestModel, TGetRequestModel, TGetResponseModel } from "../../interfaces";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { AuthActions } from "./authSlices";
import Request from "../../services/Proxy/request";

function* get({ payload }: IGetRequestModel) {
  try {
    const Res = {} as typeof payload.responseModel;
    const response: typeof Res = yield call(Request.Get, payload);
    console.log(response.data, typeof Res);

    yield put(AuthActions.getSuccess({ key: payload.key, response }));
  }
  catch (error) {
    yield put(AuthActions.getFailure({ key: payload.key, error: {} }));
  }
}

function* getAll({ payload }: IGetRequestModel) {
  try {
    const Res = {} as typeof payload.responseModel;
    const response: typeof Res = yield call(Request.GetAll, payload);
    console.log(response.data, typeof Res);

    yield put(AuthActions.getAllSuccess({ key: payload.key, response }));
  }
  catch (error) {
    console.log(error);
    yield put(AuthActions.getAllFailure({ key: payload.key, error: {} }));
  }
}

export default function* watchAuth() {
  yield all([
    takeEvery(AuthActions.get.type, get),
    takeEvery(AuthActions.getAll.type, getAll)
  ])
};
