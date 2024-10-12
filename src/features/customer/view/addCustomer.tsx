import TableLayout from "@features/_global/components/TableLayout";
import FormAddCustomer from "../components/FormAddCategory";

const AddCustomerView = () => {
  return (
    <>
      <TableLayout action="Add" title="Customer">
        <FormAddCustomer />
      </TableLayout>
    </>
  );
};

export default AddCustomerView;
