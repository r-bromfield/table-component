import "./CheckBox.css";
import { ReactComponent as CheckIcon } from "../../assets/icons/Check.svg";

const CheckBox = () => {
      return (    
      <span >
        <input type="checkbox"/>
        {/* <CheckIcon className='checkIcon'/> */}
      </span>    
  );
};

export default CheckBox;
