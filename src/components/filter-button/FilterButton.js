import "./FilterButton.css";
import icon from "../../assets/icons/Filter.svg";

const FilterButton = (props) => {
  const classes = "filterbutton " + props.className;
  return (
    <div className={classes}>
      <img src={icon} alt="filter icon" id="icon" />
      <p id="label">Filters</p>
    </div>
  );
};

export default FilterButton;
