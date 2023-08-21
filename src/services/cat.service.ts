import { Cat } from "../model/cat.model";
import { ariveAxiosInstance } from "./axios";

export interface getCatsParams {
  limit?: number;
  has_breeds?: boolean;
  page?: number;
  breed_ids?: string[];
}

export class CatService {
  public static async getCats(params: getCatsParams): Promise<Cat[]> {
    const res = await ariveAxiosInstance.get("/v1/images/search", {
      params,
    });

    return res.data;
  }
}
