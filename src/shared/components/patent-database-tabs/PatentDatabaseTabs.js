import React from 'react'
import { 
    Tabs, 
    Tab, 
    TabPanel, 
    TabList 
} from 'react-web-tabs'
import {
    DefaultTable
} from '../../layouts'
import './PatentDatabaseTabs.css'

class PatentDatabaseTabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tab: [{
                active: false,
                tabFor: 'Patentes'
            },{
                active: false,
                tabFor: 'Software'
            }].find(item => item.active ? item : null)
        }
    }
    activeTab(e){
        e.preventDefault();
        this.setState({!tab.active})
    }
    render(){
        const {tab} = this.state;
        return(
            <DefaultTable Title="Banco de Patentes do LNCC">
                <Tabs
                    defaultTab="Patentes"
                    onChange={(tabId) => {console.log(tabId)}}
                >
                    <TabList className="tabList">
                        {tab.map((item,key) =>
                            <Tab key={key} tabFor={item.tabFor}  onClick={(e) => this.activeTab(e)} className={item.active && 'active'}> {item.tabFor} </Tab>
                        )}
                    </TabList>
                    <TabPanel tabId="Patentes">
                        <p> Tab 1 content </p>
                    </TabPanel>
                    <TabPanel tabId="Software">
                        <p> Tab 2 content </p>
                    </TabPanel>
                </Tabs>
            </DefaultTable>
        )
    }
}

export default PatentDatabaseTabs