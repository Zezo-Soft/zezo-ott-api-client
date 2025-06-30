import { AxiosResponse } from "axios";
import { IHistory } from "./history.types";

// ✅ GET /api/history
const get = (queryString?: string): Promise<AxiosResponse<IHistory>> => {
  return historyHttp.get(`/api/history${queryString || ""}`);
};

// ✅ PUT /api/history
// const update = (payload: IHistory): Promise<AxiosResponse<any>> => {
//   return ApiClient.put("/api/history", payload);
// };

const historyHttp = {
  get,
  // update,
};

export default historyHttp;
