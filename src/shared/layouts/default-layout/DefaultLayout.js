import React from 'react';
import './DefaultLayout.css';
import {
    NavBar,
    Footer
} from '../../components'

const DefaultLayout = ({title,children}) => (
    <div className="default-layout-container">
        <NavBar />
        <div className="default-layout-children">
            <h1 className="default-title"> {title} </h1>
            {children} 
         </div>
        <Footer />
    </div>
)

export default DefaultLayout