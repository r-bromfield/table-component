import './SearchBar.css';
import searchicon from '../../assets/icons/Search.svg';

const SearchBar = (props) => {
  const classes = 'searchbar '+props.className;
  return (
    <div className={classes}>
    <img src={searchicon} alt='search icon'  id='icon'/>
      <input type="text" placeholder="Search for employees, salary amounts.."  className="searchinput"/>
    </div>
  );
};

export default SearchBar;