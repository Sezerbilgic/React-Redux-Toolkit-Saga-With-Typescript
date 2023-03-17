import { AuthActions } from "../../features/auth/authSlices";
import { IAuthState, TGetRequestModel, TGetResponseModel } from "../../interfaces";
import store from "../../store/config";

export const getRequest = <Res extends TGetResponseModel, Req extends TGetRequestModel>(payload: { key: keyof IAuthState, params?: Req, endpoint: string, id: string }) => {
  store.dispatch(AuthActions.get({ key: payload.key, responseModel: {} as Res, parameters: payload.params, endpoint: payload.endpoint, id: payload.id }));
};

export const getAllRequest = <Res extends TGetResponseModel, Req extends TGetRequestModel>(payload: { key: keyof IAuthState, params?: Req, endpoint: string }) => {
  store.dispatch(AuthActions.getAll({ key: payload.key, responseModel: {} as Res, parameters: payload.params, endpoint: payload.endpoint }));
};