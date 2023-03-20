import React from "react";
import { useAppSelector } from "./hooks/useStore";
import { IExampleDataModel, TDefaultResponseModel, TExampleResponseModel } from "./interfaces";
import Utils from "./services/Requests";

const App = () => {
  const example = useAppSelector(state => state.auth.example);

  React.useEffect(() => {
    Utils.getRequest<TExampleResponseModel, undefined>({ key: "example", endpoint: "example/MockApi", id: "5" });
    Utils.getAllRequest<TExampleResponseModel, undefined>({ key: "example", endpoint: "example/MockApi" });
    Utils.postRequest<TDefaultResponseModel, undefined, IExampleDataModel>({ key: "example", endpoint: "example/MockApi", data: { name: "Deneme", surname: "Test", amount: 5 } });
    Utils.putRequest<TDefaultResponseModel, undefined, IExampleDataModel>({ key: "example", endpoint: "example/MockApi", data: { name: "Deneme", surname: "Test", amount: 5 }, id: "1" });
  }, []);

  console.log(example);
  return (
    <div></div>
  )
}

export default App;
