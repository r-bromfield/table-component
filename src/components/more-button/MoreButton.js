import './MoreButton.css';
import icon from '../../assets/icons/Options.svg';

const MoreButton = (props)=>{
    const classes = 'morebutton '+props.className;
    return (
      <span className={classes}>
         <img src={icon} alt='filter icon'/>
    </span>
    );
}

export default MoreButton;