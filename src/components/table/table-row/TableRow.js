import StatusBadge from "../../status-badge/StatusBadge";
import "./TableRow.css";

import salesIcon from "../../../assets/icons/Cart.svg";
import designIcon from "../../../assets/icons/Pen Tool.svg";
import supportIcon from "../../../assets/icons/Call.svg";
import Avatar from "../../avatar/Avatar";
import CheckBox from "../../checkbox/CheckBox";
import { useState } from "react";

const TableRow = (props) => {
  let dotClasses = "";
  let statusClasses = "";
  let rowClasses = "";
  let icon = "";

  switch (props.payStatus) {
    case "PENDING":
      dotClasses = "dot dot-pending";
      statusClasses = "pending";
      break;
    case "FAILED":
      dotClasses = "dot dot-failed";
      statusClasses = "failed";
      break;
    case "DONE":
      dotClasses = "dot dot-done";
      statusClasses = "done";
      break;

    default:
      break;
  }

  switch (props.department) {
    case "Sales":
      icon = salesIcon;
      break;
    case "Design":
      icon = designIcon;
      break;
    case "Support":
      icon = supportIcon;
      break;

    default:
      break;
  }

  const [ isChecked, setIsChecked ] = useState(props.isChecked);
  function handelClick() {
    setIsChecked(!isChecked);
  }

  if (isChecked) {
    rowClasses = "row selected";
  } else {
    rowClasses = "row";
    
  }
  console.log(rowClasses);
  return (
    <tr className={`row ${isChecked ? "selected" : ""}`}>
      <td className="first">
        <span className={`withcheck ${isChecked ? "sel" : ""}`}  >
          <CheckBox isChecked={isChecked} onClick={handelClick} />
          <Avatar id={props.id} employee={props.employee} className={`row ${isChecked ? "selected" : ""}`} />
          {props.employee}
        </span>
      </td>
      <td>
        <span className="deptitem">
          <img src={icon} id="icon" alt="department icon" />
          {props.department}
        </span>
      </td>
      <td className="salary-cell">{props.salary}</td>
      <td>
        <span>
          <span className={dotClasses}></span> {props.paydate}
        </span>
      </td>
      <td>
        <StatusBadge status={props.payStatus} className={statusClasses} />
      </td>
      <td>{props.details}</td>
    </tr>
  );
};

export default TableRow;
