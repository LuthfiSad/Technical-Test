
import { CustomerModel } from "@core/model/customer";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type onDelete = (id: string) => void;

interface TableItemProps extends CustomerModel {
  onClickDelete: onDelete;
  // isPending: boolean;
  // isSuccess: boolean;
  // isError: boolean;
}

export const TableItem: React.FC<TableItemProps> = ({
  id,
  customerId,
  gender,
  age,
  annualIncome,
  spendingScore,
  profession,
  workExperience,
  familySize,
  onClickDelete,
  // isPending,
  // isSuccess,
  // isError,
}) => {
  const toggle = () =>
    withReactContent(Swal)
      .fire({
        title: `Are you sure want delete ${name}?`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          onClickDelete(id as string);
        }
      });

  return (
    <>
      <tr>
        <td className="px-4 py-2">
          <p className="text-white">{customerId}</p>
        </td>
        <td className="px-4 py-2">
          <p className="text-white">{gender}</p>
        </td>
        <td className="px-4 py-2">
          <p className="text-white">{age}</p>
        </td>
        <td className="px-4 py-2">
          <p className="text-white">{annualIncome}</p>
        </td>
        <td className="px-4 py-2">
          <p className="text-white">{spendingScore}</p>
        </td>
        <td className="px-4 py-2">
          <p className="text-white">{profession}</p>
        </td>
        <td className="px-4 py-2">
          <p className="text-white">{workExperience}</p>
        </td>
        <td className="px-4 py-2">
          <p className="text-white">{familySize}</p>
        </td>
        <td className="px-4 ">
          <div className="flex flex-col items-center justify-center gap-1 py-1">
            <div className="w-20">
              <Link
                to={`/customer/edit/${id}`}
                className="hover:opacity-70 text-sm text-white rounded-full px-2 bg-yellow-500 flex justify-center items-center gap-1"
              >
                <FaEdit /> Edit
              </Link>
            </div>
            <button
              onClick={toggle}
              className="hover:opacity-70 text-sm text-white rounded-full px-2 bg-red-500 flex justify-center items-center gap-1 w-20"
            >
              <FaTrash /> Hapus
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
