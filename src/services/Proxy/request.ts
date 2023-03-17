import { IGetAllPayloadModel, IGetPayloadModel } from "../../interfaces";
import Proxy from "./proxy.service";

class Request {
  public Get = (payload: IGetPayloadModel) => {
    return Proxy.get(`${payload.endpoint}/${payload.id}`, { params: payload.parameters })
  }

  public GetAll = (payload: IGetAllPayloadModel) => {
    console.log(payload.endpoint);
    return Proxy.get(payload.endpoint, { params: payload.parameters })
  }
}

export default new Request();