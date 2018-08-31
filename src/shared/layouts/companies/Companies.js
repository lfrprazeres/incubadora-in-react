import React from 'react'
import {Image} from '../../components'

class Companies extends React.Component{
    render(){
        const {company} = this.props
        return(
            <div>
                {this.props.company.map((item,key) =>
                    <div key={key} className={((key + 1) % 2 == 0) ? 'company reverse' : 'company'}>
                        <div>
                            <Image source={item.logo}/>
                        </div>
                        {item.paragraph && <div className="company-content">
                                {item.paragraph.map((pItem,pKey) =>
                                    <div key={pKey}>
                                        <p> {(pKey == 0) && <b> A {item.company} </b>} {pItem.text}</p>
                                    </div>
                                )}
                                {item.partner.map((partnerItem,partnerKey) =>
                                    <p key={partnerKey} className="partner">
                                        {partnerItem.label}
                                    </p>
                                )}
                        </div>}
                    </div>
                )}
            </div>
        )
    }
}
export default Companies