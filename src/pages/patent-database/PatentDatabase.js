import React from 'react'
import {
    DefaultLayout
} from '../../shared/layouts'
import {
    PatentDatabaseTabs
} from '../../shared/components'

class PatentDatabase extends React.Component{
    render(){
        return(
            <DefaultLayout>
                <PatentDatabaseTabs />
            </DefaultLayout>
        )
    }
}

export default PatentDatabase