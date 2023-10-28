import React from 'react'
import { BiSearch } from 'react-icons/bi';

import './DashboardSearch.css'

const DashboardSearch = () => {
  return (
    <div className='search__input'>
      <BiSearch />
      <input type='search' placeholder='Search' />
    </div>
  );
}

export default DashboardSearch