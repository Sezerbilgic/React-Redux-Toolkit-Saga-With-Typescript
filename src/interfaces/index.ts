import { AxiosRequestConfig } from "axios";

export interface IStateMisc {
  loading: boolean;
  saving: boolean;
  error: null | string | object;
  statusCode: number | null
}

export interface IAuthState {
  example: {
    list: {
      statusCode: number | null;
      data: object | null,
      loading: boolean,
      saving: boolean;
      error: null | string | object;
    },
    single: {
      statusCode: number | null;
      saving: boolean;
      data: object | null,
      loading: boolean,
      error: null | string | object;
    }
  }
}

export interface IGetPayloadModel {
  key: keyof IAuthState,
  responseModel: TGetResponseModel,
  parameters?: TGetRequestModel,
  endpoint: string,
  id: string
}

export interface IGetAllPayloadModel {
  key: keyof IAuthState,
  responseModel: TGetResponseModel,
  parameters?: TGetRequestModel,
  endpoint: string
}
export interface IPostPayloadModel {
  key: keyof IAuthState,
  data: object,
  parameters?: TGetRequestModel,
  endpoint: string
}
export interface IPutPayloadModel {
  key: keyof IAuthState,
  data: object,
  parameters?: TGetRequestModel,
  endpoint: string,
  id: string
}

export interface IGetRequestModel {
  type: string,
  payload: IGetPayloadModel
}
export interface IPostRequestModel {
  type: string,
  payload: IPostPayloadModel
}
export interface IPutRequestModel {
  type: string,
  payload: IPutPayloadModel
}

export interface IErrorResponse {
  key: keyof IAuthState,
  error: {},
  statusCode: number | null
}

export interface ISuccessResponse {
  key: keyof IAuthState,
  response: TGetResponseModel
  statusCode: number | null
}

export type TExampleResponseModel = {
  data: {
    id: string,
    name: string,
    surname: string,
    amount: number,
  }[]
}

export type TDefaultResponseModel = {
  data: []
}

export type TUpdateReducerModel = {
  key: keyof IAuthState,
  endpoint: string,
  parameters?: TGetRequestModel,
  id?: string,
  data?: object
}

export type TUpdateReducers = {
  key: keyof IAuthState,
  endpoint: string,
  parameters?: TGetRequestModel,
  statusCode: number | null,
  id?: string,
  data?: object
}

export interface IExampleDataModel {
  name: string,
  surname: string,
  amount: number
}

export interface AxiosResponse<T = never> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig<T>;
  request?: any;
}


export type TGetRequestModel = undefined;

export type TGetResponseModel = TExampleResponseModel | TDefaultResponseModel;

export type TDataModel = IExampleDataModel;