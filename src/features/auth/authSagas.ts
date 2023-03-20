import { AxiosResponse, IGetRequestModel, IPostRequestModel, IPutRequestModel } from "../../interfaces";
import { all, call, put as SagaPut, takeEvery } from "redux-saga/effects";
import { AuthActions } from "./authSlices";
import Request from "../../services/Proxy/request";

function* get({ payload }: IGetRequestModel) {
  try {
    const Res = {} as typeof payload.responseModel;
    const response: AxiosResponse<typeof Res> = yield call(Request.Get, payload);

    yield SagaPut(AuthActions.getSuccess({ key: payload.key, response: response.data, statusCode: response.status }));
  }
  catch (error) {
    yield SagaPut(AuthActions.getFailure({ key: payload.key, error: {}, statusCode: null }));
  }
}

function* getAll({ payload }: IGetRequestModel) {
  try {
    const Res = {} as typeof payload.responseModel;
    const response: AxiosResponse<typeof Res> = yield call(Request.GetAll, payload);

    yield SagaPut(AuthActions.getAllSuccess({ key: payload.key, response: response.data, statusCode: response.status }));
  }
  catch (error) {
    yield SagaPut(AuthActions.getAllFailure({ key: payload.key, error: {}, statusCode: null }));
  }
}

function* post({ payload }: IPostRequestModel) {
  try {
    const response: AxiosResponse = yield call(Request.Post, payload);
    console.log(response);
    yield SagaPut(AuthActions.postSuccess({ key: payload.key, response: response.data, statusCode: response.status }));
  }
  catch (error) {
    yield SagaPut(AuthActions.postFailure({ key: payload.key, error: {}, statusCode: null }));
  }
}

function* put({ payload }: IPutRequestModel) {
  try {
    const response: AxiosResponse = yield call(Request.Put, payload);
    yield SagaPut(AuthActions.putSuccess({ key: payload.key, response: response.data, statusCode: response.status }));
  }
  catch (error) {
    yield SagaPut(AuthActions.putFailure({ key: payload.key, error: {}, statusCode: null }));
  }
}

export default function* watchAuth() {
  yield all([
    takeEvery(AuthActions.get.type, get),
    takeEvery(AuthActions.getAll.type, getAll),
    takeEvery(AuthActions.post.type, post),
    takeEvery(AuthActions.put.type, put)
  ])
};
