import React from 'react'
import './DefaultTable.css'

const DefaultTable = ({Title,children}) => (
    <div className="DefaultTable">
        <div className="Table-title">
            <h2> {Title} </h2>
        </div>
        <div>
            {children}
        </div>
    </div>
)

export default DefaultTable