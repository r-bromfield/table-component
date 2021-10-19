import "./CheckBox.css";
import { ReactComponent as CheckIcon } from "../../assets/icons/Check.svg";

const CheckBox = (props) => {  
 
      return (    
      <span onClick={props.onClick}>
        <input type="checkbox" checked={props.isChecked} />
         {/* <CheckIcon className='checkIcon'/> */} 
      </span>    
  );
};

export default CheckBox;
