import { BiSortAZ, BiSortZA } from 'react-icons/bi';
import './Sort.css';
function Sort({ sortOrder, onSort }) {
  return sortOrder === 'asc' ? (
    <div onClick={onSort} className='sort'>
      <BiSortZA size={25} />
      <span>click to sort ascending</span>
    </div>)

    : (
      <div onClick={onSort} className='sort'>
        <BiSortAZ size={25} />
        <span>click to sort descending</span>
      </div>

    );


}
export default Sort;