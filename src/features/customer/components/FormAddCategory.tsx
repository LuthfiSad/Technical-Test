import { CustomerDTO } from "@core/model/customer";
import Input from "@features/_global/components/Input";
import { useCustomerCreation } from "@features/_global/hooks/useCustomer";
import { useState } from "react";

const InitialValue: CustomerDTO = {
  customerId: undefined,
  gender: "",
  age: undefined,
  annualIncome: undefined,
  spendingScore: undefined,
  profession: "",
  workExperience: undefined,
  familySize: undefined,
};

const FormAddCustomer = () => {
  const mutation = useCustomerCreation();

  const [customerBody, setCustomerBody] = useState<CustomerDTO>({
    ...InitialValue,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof CustomerDTO, string>>
  >({});

  const validate = () => {
    const newErrors: Partial<Record<keyof CustomerDTO, string>> = {};

    let isValid = true;

    if (!customerBody.customerId) {
      newErrors.customerId = "Customer ID is required";
      isValid = false;
    }

    if (!customerBody.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    if (!customerBody.age) {
      newErrors.age = "Age is required";
      isValid = false;
    }

    if (!customerBody.annualIncome) {
      newErrors.annualIncome = "Annual Income is required";
      isValid = false;
    }

    if (!customerBody.spendingScore) {
      newErrors.spendingScore = "Spending Score is required";
      isValid = false;
    }

    if (!customerBody.profession) {
      newErrors.profession = "Profession is required";
      isValid = false;
    }

    if (!customerBody.workExperience) {
      newErrors.workExperience = "Work Experience is required";
      isValid = false;
    }

    if (!customerBody.familySize) {
      newErrors.familySize = "Family Size is required";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    await mutation.mutateAsync({
      type: "create",
      data: customerBody,
    });
  };

  const handleReset: () => void = () => {
    setCustomerBody(InitialValue);
    setErrors({});
  };
  return (
    <div className="flex flex-col gap-9">
      <div className="rounded-md border border-stroke text-white bg-gray-900 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
          <h3 className="font-medium">Add Customer</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="mb-2">
              <Input
                type="number"
                placeholder="Enter Customer ID"
                error={errors.customerId}
                name="customerId"
                value={customerBody.customerId}
                disabled={mutation.isPending}
                isLoading={mutation.isPending}
                onChange={(e) => {
                  setCustomerBody({
                    ...customerBody,
                    customerId: Number(e.target.value) || undefined,
                  });
                }}
              >
                Customer ID
              </Input>
            </div>
            <div className="mb-2">
              <Input
                placeholder="Enter Customer ID"
                error={errors.gender}
                name="gender"
                defaultValue={customerBody.gender}
                disabled={mutation.isPending}
                isLoading={mutation.isPending}
                onChange={(e) => {                  
                  setCustomerBody({
                    ...customerBody,
                    gender: e.target.value,
                  });
                }}
                isSelect={{
                  options: [
                    {
                      label: "Male",
                      value: "Male",
                    },
                    {
                      label: "Female",
                      value: "Female",
                    },
                  ],
                }}
              >
                Gender
              </Input>
            </div>
            <div className="mb-2">
              <Input
                type="number"
                placeholder="Enter Age"
                error={errors.age}
                name="age"
                value={customerBody.age}
                disabled={mutation.isPending}
                isLoading={mutation.isPending}
                min={0}
                onChange={(e) => {
                  setCustomerBody({
                    ...customerBody,
                    age: Number(e.target.value) || undefined,
                  });
                }}
              >
                Age
              </Input>
            </div>
            <div className="mb-2">
              <Input
                type="number"
                placeholder="Enter Annual Income"
                error={errors.annualIncome}
                name="annualIncome"
                value={customerBody.annualIncome}
                disabled={mutation.isPending}
                isLoading={mutation.isPending}
                min={0}
                onChange={(e) => {
                  setCustomerBody({
                    ...customerBody,
                    annualIncome: Number(e.target.value) || undefined,
                  });
                }}
              >
                Annual Income
              </Input>
            </div>
            <div className="mb-2">
              <Input
                type="number"
                placeholder="Enter Spending Score"
                error={errors.spendingScore}
                name="spendingScore"
                value={customerBody.spendingScore}
                disabled={mutation.isPending}
                isLoading={mutation.isPending}
                min={0}
                onChange={(e) => {
                  setCustomerBody({
                    ...customerBody,
                    spendingScore: Number(e.target.value) || undefined,
                  });
                }}
              >
                Spending Score
              </Input>
            </div>
            <div className="mb-2">
              <Input
                placeholder="Enter Profession"
                error={errors.profession}
                name="profession"
                value={customerBody.profession}
                disabled={mutation.isPending}
                isLoading={mutation.isPending}
                onChange={(e) => {
                  setCustomerBody({
                    ...customerBody,
                    profession: e.target.value,
                  });
                }}
              >
                Profession
              </Input>
            </div>
            <div className="mb-2">
              <Input
                type="number"
                placeholder="Enter Work Experience"
                error={errors.workExperience}
                name="workExperience"
                value={customerBody.workExperience}
                disabled={mutation.isPending}
                isLoading={mutation.isPending}
                min={0}
                onChange={(e) => {
                  setCustomerBody({
                    ...customerBody,
                    workExperience: Number(e.target.value) || undefined,
                  });
                }}
              >
                Work Experience
              </Input>
            </div>
            <div className="mb-2">
              <Input
                type="number"
                placeholder="Enter Family Size"
                error={errors.familySize}
                name="familySize"
                value={customerBody.familySize}
                disabled={mutation.isPending}
                isLoading={mutation.isPending}
                min={0}
                onChange={(e) => {
                  setCustomerBody({
                    ...customerBody,
                    familySize: Number(e.target.value) || undefined,
                  });
                }}
              >
                Family Size
              </Input>
            </div>
            <div className="flex justify-center items-center gap-5 mt-4">
              <button
                onClick={() => handleReset()}
                type="reset"
                className="flex w-full justify-center rounded bg-gray-300 p-3 font-medium text-black hover:bg-opacity-90"
              >
                Reset
              </button>
              <button
                type="submit"
                className={`flex w-full justify-center rounded ${
                  mutation.isPending ? "bg-gray-300" : "bg-blue-600"
                } p-3 font-medium text-white hover:bg-opacity-90`}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Loading..." : "Add"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddCustomer;