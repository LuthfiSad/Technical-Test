import {
  ApiErrorResponse,
  ApiResponse,
  QueryParams,
} from "@core/libs/api/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import useDebounce from "./useDebounce";
import { customerService } from "@core/services/customer";
import { CustomerDTO } from "@core/model/customer";

interface Options extends QueryParams {
  page?: number;
  perPage?: number;
  gender?: string;
}

type PayloadType = "create" | "update" | "delete";

interface customerCreation {
  type: PayloadType;
  data?: CustomerDTO;
  id?: string;
}

export function useCustomer(options?: Options) {
  const [searchParams] = useSearchParams();
  const page = options?.page || searchParams.get("page") || 1;
  const perPage = options?.perPage || searchParams.get("perPage") || 10;
  const gender = options?.gender || searchParams.get("gender") || undefined;
  const searchQuery =
    options?.search || searchParams.get("search") || undefined;

  const search = useDebounce(searchQuery as string, 500);

  const query = useQuery({
    queryKey: ["customers", { page, perPage, search, gender }],
    queryFn: () =>
      customerService.get({
        queryParams: {
          perPage: perPage ? Number(perPage) : undefined,
          page: page ? Number(page) : undefined,
          gender: gender,
          search: search,
        } as Options,
      }),
  });
  return query;
}

export function useCustomerCreation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async ({ data, type, id }: customerCreation) => {
      switch (type) {
        case "create":
          return customerService.post(data);
        case "update":
          return customerService.put(data, {
            path: id,
          });
        case "delete":
          return customerService.delete({ path: id });
        default:
          return customerService.post(data);
      }
    },
    onSuccess: (res) => {
      toast.success(res.message, {
        position: "top-right",
        autoClose: 2500,
        pauseOnHover: true,
        theme: "dark",
      });
      navigate("/customer");

      queryClient.removeQueries({ queryKey: ["customers"] });
      queryClient.removeQueries({ queryKey: ["customersById"] });
      return;
    },
    onError: (err: ApiErrorResponse<ApiResponse>) => {
      console.log(err);
      
      toast.error(err.message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "dark",
      });
    },
  });
  return mutation;
}

export function useCustomerById() {
  const { id } = useParams();
  return useQuery({
    queryKey: ["customersById", id],
    queryFn: () => customerService.getById({ path: id }),
    enabled: !!id,
  });
}
