import React from 'react'
import '../../app/page.css';

const FilterCard = ({title}) => {
  return (
    <div className='filter-section'>
        <h4 className='filter-title'>{title}</h4>
        <p style={{fontSize : '14px' , fontWeight : 'lighter'}}>ALL</p>
        <hr className='filter-seperator'/>
    </div>
  )
}

export default FilterCard