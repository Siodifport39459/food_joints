import React from 'react';
import {Link} from 'react-router-dom'

import './menu-item.styles.scss';

const MenuItem = ({title,imageUrl}) => (
    <div style={ {
     backgroundImage: `url(${imageUrl})`}}
    
        className='menu-item'>
        <div className='content'>
        <Link className="option" to="/">{title} </Link>
            
        </div>
    </div>
)

export default MenuItem;
