import React from 'react';
import './DefaultLayout.css';
import {
    NavBar,
    Footer
} from '../../components'

const DefaultLayout = ({children}) => (
    <div className="default-layout-container">
        <NavBar />
        <div className="default-layout-children"> {children} </div>
        <Footer />
    </div>
)

export default DefaultLayout