import "./Table.css";

import TableTop from "./table-top/TableTop";
import TableRow from "./table-row/TableRow";
import CheckBox from "../checkbox/CheckBox";
import { useState } from "react";

const Table = (props) => {
  const [isAllChecked, setIsAllChecked] = useState(false);

  function handelClick() {
    setIsAllChecked(!isAllChecked);
    console.log(isAllChecked);
  }
  return (
    <div>
      <TableTop />

      <table className="table">
        <tr>
          <th className="tableheading first">
            {
              <span className="withcheck">
                <CheckBox id="masterCheck" onClick={handelClick} /> Employee
              </span>
            }
          </th>
          <th className="tableheading">Department</th>
          <th className="tableheading">Salary</th>
          <th className="tableheading">Payment Date</th>
          <th className="tableheading">Payment Status</th>
          <th className="tableheading">Details</th>
        </tr>
        {props.data.map((rowitem) => (
          <TableRow
            id={rowitem.id}
            employee={rowitem.employee}
            department={rowitem.department}
            salary={rowitem.salary}
            paydate={rowitem.paydate}
            payStatus={rowitem.payStatus}
            details={rowitem.details}
            isChecked={isAllChecked}
          />
        ))}
      </table>
    </div>
  );
};

export default Table;
