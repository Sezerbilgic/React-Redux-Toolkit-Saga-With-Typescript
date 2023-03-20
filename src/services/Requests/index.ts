import { AuthActions } from "../../features/auth/authSlices";
import { IAuthState, TDataModel, TGetRequestModel, TGetResponseModel } from "../../interfaces";
import store from "../../store/config";

class Utils {

  public getRequest = <Res extends TGetResponseModel, Req extends TGetRequestModel>(payload: { key: keyof IAuthState, params?: Req, endpoint: string, id: string }) => {
    store.dispatch(AuthActions.get({ key: payload.key, responseModel: {} as Res, parameters: payload.params, endpoint: payload.endpoint, id: payload.id }));
  };

  public getAllRequest = <Res extends TGetResponseModel, Req extends TGetRequestModel>(payload: { key: keyof IAuthState, params?: Req, endpoint: string }) => {
    store.dispatch(AuthActions.getAll({ key: payload.key, responseModel: {} as Res, parameters: payload.params, endpoint: payload.endpoint }));
  };

  public postRequest = <Res extends TGetResponseModel, Req extends TGetRequestModel, Data extends TDataModel>(payload: { key: keyof IAuthState, params?: Req, endpoint: string, data: Data }) => {
    store.dispatch(AuthActions.post({ key: payload.key, parameters: payload.params, endpoint: payload.endpoint, data: payload.data }));
  };

  public putRequest = <Res extends TGetResponseModel, Req extends TGetRequestModel, Data extends TDataModel>(payload: { key: keyof IAuthState, params?: Req, endpoint: string, data: Data, id: string }) => {
    store.dispatch(AuthActions.put({ key: payload.key, parameters: payload.params, endpoint: payload.endpoint, data: payload.data, id: payload.id }));
  };
}

export default new Utils();