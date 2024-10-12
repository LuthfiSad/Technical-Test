import { useCustomer, useCustomerCreation } from "@features/_global/hooks/useCustomer";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHead,
} from "@features/_global/components/Table";
import { TableItem } from "./Table";
import { convertQueryParamsToObject } from "@features/_global/helper";
import EmptyData from "@features/_global/components/EmptyData";
import Pagination from "./Pagination";
import FilterCustomer from "@features/_global/components/Filter/FilterCustomer";

const CustomerTable = () => {
  const { data: custumers, isLoading } = useCustomer();
  const mutation = useCustomerCreation();

  // loading bar
  useEffect(() => {}, [isLoading]);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = convertQueryParamsToObject(searchParams.toString());

  const handleChangePage = (page: number) => {
    setSearchParams({ ...queryParams, page: String(page) });
  };

  const handleDelete = (id: string) => {
    mutation.mutate({
      type: "delete",
      id,
    });
  };

  return (
    <>
      <div className="rounded-md border border-stroke w-full bg-gray-900 px-5 shadow-default dark:bg-boxdark sm:px-7">
        <div className="py-6  flex flex-wrap items-center justify-between">
          <h4 className="text-xl font-bold text-white">Data Customer</h4>
          <Link
            to="/customer/add"
            className="text-sm font-medium text-white bg-blue-600 py-2 px-4 rounded-full hover:opacity-90"
          >
            Add Customer
          </Link>
        </div>
        <FilterCustomer />
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHead HeadList={["CustomerID", "Gender", "Age", "Annual Income ($)", "Spending Score (1-100)", "Profession", "Work Experience", "Family Size", "Actions"]} />
            <TableBody>
              {isLoading ? (
                <tr>
                  <td colSpan={12}>
                    <div className="flex w-full h-[230px] justify-center items-center text-white">
                      Loading...
                    </div>
                  </td>
                </tr>
              ) : !custumers?.data?.length ? (
                <tr>
                  <td colSpan={12}>
                    <EmptyData title="Custumers" action />
                  </td>
                </tr>
              ) : (
                <>
                  {custumers?.data?.map((item, index) => (
                    <TableItem
                      key={index}
                      {...item}
                      onClickDelete={handleDelete}
                      // isPending={mutation.isPending}
                      // isSuccess={mutation.isSuccess}
                      // isError={mutation.isError}
                    />
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </div>
      <Pagination
        currentPage={custumers?.meta?.page as number}
        totalPages={custumers?.meta?.totalPages as number}
        onPageChange={handleChangePage}
      />
      </div>
    </>
  );
};

export default CustomerTable;
