import React from 'react'
import {
    DefaultLayout
} from '../../shared/layouts'

import {
    OpportunitiesTable
} from '../../shared/components'

class Opportunities extends React.Component{
    render(){
        return(
            <DefaultLayout>
                <OpportunitiesTable />
            </DefaultLayout>
        )
    }
}

export default Opportunities