
import { createBrowserRouter } from "react-router-dom";
import RootView from "@features/_global/view/RootView";
import CustomerView from "@features/customer/view/customer";
import AddCustomerView from "@features/customer/view/addCustomer";
import EditCustomerView from "@features/customer/view/editCustomer";
// import AddCustomerView from "@features/customer/view/addCustomer";
// import EditCustomerVIew from "@features/customer/view/editCustomer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "/",
        element: <CustomerView />,
      },
      {
        path: "/customer/add",
        element: <AddCustomerView />,
      },
      {
        path: "/customer/edit/:id",
        element: <EditCustomerView />,
      },
      {
        path: "*",
        element: <CustomerView />,
      }
    ],
    
  },
]);
