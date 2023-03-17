export interface IStateMisc {
  loading: boolean;
  error: null | string | object;
}

export interface IAuthState {
  example: {
      list: {
        data: object | null,
        loading: boolean,
        error: null | string | object;
      },
      single: {
        data: object | null,
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

export interface IGetRequestModel {
  type: string,
  payload: IGetPayloadModel
}

export interface IErrorResponse {
  key: keyof IAuthState,
  error: {}
}

export interface IGetResponse {
  key: keyof IAuthState,
  response: TGetResponseModel
}

export type TExampleResponseModel = {
  data: {
    id: string,
    name: string,
    surname: string,
    amount: number,
  }[]
}

export type TGetRequestModel = undefined

export type TGetResponseModel = TExampleResponseModel
