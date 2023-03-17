import React from "react";
import { useAppSelector } from "./hooks/useStore";
import { TExampleResponseModel } from "./interfaces";
import { getAllRequest, getRequest } from "./services/Requests";

const App = () => {
  const example = useAppSelector(state => state.auth.example);

  React.useEffect(() => {
    getRequest<TExampleResponseModel, undefined>({ key: "example", endpoint: "example/Example", id: "5" });
    getAllRequest<TExampleResponseModel, undefined>({ key: "example", endpoint: "example/Example" });
  }, []);

  console.log(example);
  return (
    <div>Deneme</div>
  )
}

export default App;
