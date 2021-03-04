import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Hyderabad',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
         
        },
        {
          title: 'Bangalore',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          
        },
        {
          title: 'kochi',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
         
        },
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
