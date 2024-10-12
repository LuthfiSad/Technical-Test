import TableLayout from "@features/_global/components/TableLayout";
import FormUpdateCustomer from "../components/FormUpdateCategory";

const EditCustomerView = () => {
  return (
    <TableLayout action="Update" title="Customer">
      <FormUpdateCustomer />
    </TableLayout>
  );
};

export default EditCustomerView;
