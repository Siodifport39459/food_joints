import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'


const HomePage = () => (
    <div className='homepage'>
         <h2 className='heading'>Select your City</h2>
        <Directory/>
    </div>
)
export default HomePage;