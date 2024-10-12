import { API_ENDPOINT } from "@core/configs/app";
import { HTTP_REQUEST } from "@core/libs/api/config";
import { ApiResponse } from "@core/libs/api/types";
import { CustomerModel } from "@core/model/customer";

export const customerService = {
  get: HTTP_REQUEST.get<ApiResponse<CustomerModel[]>>(API_ENDPOINT.customers),
  getById: HTTP_REQUEST.get<ApiResponse<CustomerModel>>(API_ENDPOINT.customers),
  post: HTTP_REQUEST.post<ApiResponse<CustomerModel>>(API_ENDPOINT.customers),
  put: HTTP_REQUEST.put<ApiResponse<CustomerModel>>(API_ENDPOINT.customers),
  delete: HTTP_REQUEST.delete<ApiResponse<void>>(API_ENDPOINT.customers),
};
