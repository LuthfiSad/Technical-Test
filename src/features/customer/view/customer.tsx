import TableLayout from "@features/_global/components/TableLayout";
import CustomerTable from "../components/CustomerTable";
import GenderChart from "@features/_global/components/Chart/GenderChart";

const CustomerView = () => {
  return (
    <>
      <TableLayout action="Data" title="Customer">

          <GenderChart />
        <CustomerTable />
      </TableLayout>
    </>
  );
};

export default CustomerView;
