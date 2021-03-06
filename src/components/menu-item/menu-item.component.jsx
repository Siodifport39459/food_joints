import React from 'react';
import {Link} from 'react-router-dom'
import FoodItem from '../../pages/food/food.component'

import './menu-item.styles.scss';

const MenuItem = ({title,imageUrl}) => (
    <div style={ {
     backgroundImage: `url(${imageUrl})`}}
    
        className='menu-item'>
        <div className='content'>
        <Link
  to={{
    pathname: "/food",
    data: {title} // your data array of objects
  }}
>{title}</Link>
        </div>
       </div> 
    
        )
    

export default MenuItem;
