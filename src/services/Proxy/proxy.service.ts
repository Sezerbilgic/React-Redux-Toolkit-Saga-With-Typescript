import axios, { AxiosInstance } from "axios";

class Proxy {
  private service: AxiosInstance;

  constructor() {
    this.service = axios.create({
      baseURL: "https://64141b8a50dff8e8fe454432.mockapi.io",
      headers: {
        common: {
          Accept: 'application/json',
        },
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
  }

  get = (url: string, params?: any): any => {
    return this.service.get(url, params);
  };

  post = (url: string, body?: any): any => {
    return this.service.post(url, body);
  };

  put = (url: string, body: any): any => {
    return this.service.put(url, body);
  };

  delete = (url: string, body: any): any => {
    return this.service.delete(url, body);
  };
};

export default new Proxy();