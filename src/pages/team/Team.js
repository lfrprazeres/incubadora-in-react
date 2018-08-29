import React from 'react';
import {
    DefaultLayout
} from '../../shared/layouts'

import {
    Teammate
} from '../../shared/components'

class Team extends React.Component{
    render(){
        return(
            <DefaultLayout title="Equipe">
                <Teammate />
            </DefaultLayout>
        )
    }
}

export default Team;