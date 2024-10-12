import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomerDTO } from "@core/model/customer";
import { convertQueryParamsToObject } from "@features/_global/helper";

const FilterCustomer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActive, setIsActive] = useState<string>(searchParams.get("gender") || "");
  const queryParams = convertQueryParamsToObject(searchParams.toString());

  const handleSelect = ({ gender }: CustomerDTO) => {
    setIsActive(gender as string);
    setSearchParams({ ...queryParams, gender: gender as string, page: "1" });
  };

  const handleReset = () => {
    setIsActive("");
    setSearchParams({ ...queryParams, gender: "", page: "1" });
  };

  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="flex gap-2 flex-wrap text-sm">
        <button
          className={`border border-primary px-3 py-1 rounded-full text-white ${
            isActive === "" && "bg-blue-900"
          }`}
          onClick={handleReset}
        >
          Semua
        </button>
          <button
            className={`border border-primary px-3 py-1 rounded-full text-white ${
              isActive === "Male" && "bg-blue-900"
            }`}
            onClick={() => handleSelect({ gender: "Male" })}
          >
            Male
          </button>
          <button
            className={`border border-primary px-3 py-1 rounded-full text-white ${
              isActive === "Female" && "bg-blue-900"
            }`}
            onClick={() => handleSelect({ gender: "Female" })}
          >
            Female
          </button>
      </div>
    </div>
  );
};

export default FilterCustomer;
