import React from 'react';
import  '../footer/footer.css'

const FooterList = ({title , items}) => {
  return (
    <div style={{color : 'white'}} className='list'>
        <h4>{title}</h4>
        <ul>
            {items?.map((item, index) => (
                <li  key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default FooterList