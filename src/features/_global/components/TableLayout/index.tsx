import React, { useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Input from "../Input";
import { convertQueryParamsToObject } from "@features/_global/helper";

interface NavbarTable {
  action?: "Add" | "Update" | "Data" | "Detail";
  title: string;
  children?: React.ReactNode;
  searchField?: boolean;
  searchKey?: string;
}

const TableLayout: React.FC<NavbarTable> = ({
  action,
  title,
  children,
  searchField,
  searchKey = "search",
}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = convertQueryParamsToObject(searchParams.toString());

  const handeSearchChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        setSearchParams({ ...queryParams, search: e.target.value });
      },
      [searchField, searchParams]
    );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-bold text-2xl text-white">{title}</h2>

        <nav>
          {action && (
            <ol className="flex text-base items-center gap-2">
              <li>
                <Link
                  className="font-medium text-secondary"
                  to={`/admin/${title.toLowerCase()}`}
                >
                  {title} /
                </Link>
              </li>

              <li className="font-medium text-blue-500">
                {action} {title}
              </li>
            </ol>
          )}
        </nav>
      </div>
      {searchField ? (
        <div className="flex items-center justify-end">
          <div className="w-64">
            <Input
              value={queryParams?.[searchKey] || ""}
              onChange={handeSearchChange}
              name="search"
              placeholder={`Search ${title}`}
              style={{ color: "#FFF" }}
            />
          </div>
        </div>
      ) : null}
      <div>{children}</div>
    </div>
  );
};

export default TableLayout;
