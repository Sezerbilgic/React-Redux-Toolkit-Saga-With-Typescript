import { IGetAllPayloadModel, IGetPayloadModel, IPostPayloadModel, IPutPayloadModel } from "../../interfaces";
import Proxy from "./proxy.service";

class Request {
  public Get = (payload: IGetPayloadModel) => {
    return Proxy.get(`${payload.endpoint}/${payload.id}`, { params: payload.parameters })
  }

  public GetAll = (payload: IGetAllPayloadModel) => {
    return Proxy.get(payload.endpoint, { params: payload.parameters })
  }

  public Post = (payload: IPostPayloadModel) => {
    return Proxy.post(payload.endpoint, payload.data)
  }

  public Put = (payload: IPutPayloadModel) => {
    return Proxy.put(`${payload.endpoint}/${payload.id}`, payload.data)
  }
}

export default new Request();