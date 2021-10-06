import React from 'react';

import Directory from '../../components/directory/directory.component';
import Artists from '../artists/artists.component';


import './homepage.styles.scss';


const HomePage = () => (
    <div className='homepage'>
        {/* <Directory /> */}
        <Artists />
    </div>
)

export default HomePage;