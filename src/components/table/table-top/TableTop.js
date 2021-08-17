import FilterButton from '../../filter-button/FilterButton';
import MoreButton from '../../more-button/MoreButton';
import SearchBar from '../../search-bar/SearchBar';
import './TableTop.css';

const TableTop = ()=>{
    return (
    <div className='tabletop'>
        <SearchBar />
        <div className='filtermore'>
        <FilterButton />
        <MoreButton className="more"/>
        </div>
        
        
    </div>
    );
}

export default TableTop;