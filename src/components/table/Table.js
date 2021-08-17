import "./Table.css";

import TableTop from "./table-top/TableTop";
import TableRow from "./table-row/TableRow";
import CheckBox from "../checkbox/CheckBox";


const Table = (props) => {
  return (
    <div>
      <TableTop />
     
      <table className="table">
        <tr>
          <th className="tableheading first">
         
            {
              <span className='withcheck'>
                <CheckBox/> Employee
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
          />
        ))}
      </table>
    </div>
  );
};

export default Table;
