import React from 'react'
import {Link} from 'react-router-dom'
import {Image} from '../'
import './NavBar.css'
import { stack as Menu } from 'react-burger-menu'
import Sizes from 'react-sizes'
import './NavBarMobile.css'
 
class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobileVersion: false,
            width: 0,
            height: 0,
            isLoaded: false,
            navBarMobile: [{
                label: 'A Incubadora',
                mobileLink: [{
                    label: 'Quem Somos',
                    href: '/quem-somos'
                },{
                    label: 'Regime Interno',
                    href: '/regime-interno'
                },{
                    label: 'Equipe',
                    href: '/equipe'
                }]
            },{
                label: 'Serviços',
                mobileLink: [{
                    label: 'Oportunidades',
                    href: '/oportunidades'
                },{
                    label: 'Banco de patentes',
                    href: '/banco-de-patentes'
                },{
                    label: 'Perguntes Frequentes',
                    href: '/perguntas-frequentes'
                }]
            },{
                label: 'Empresas',
                mobileLink: [{
                    label: 'Empresas Residentes',
                    href: '/empresas-residentes'
                },{
                    label: 'Empresas Graduadas',
                    href: '/empresas-graduadas'
                }]
            },{
                label: 'Processo Seletivo',
                mobileLink: [{
                    label: 'Seleção',
                    href: '/selecao'
                },{
                    label: 'Edital 2018',
                    href: '/edital-2018'
                }]
            },{
                label: 'Contato',
                mobileLink: false
            }]
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        this.setState({
            isLoaded: true
        })
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ 
            width: window.innerWidth, 
            height: window.innerHeight 
        })
      }
  render () {
      const {isLoaded,width,navBarMobile} = this.state;
      const mobile = width < 1700;
    return (
        <div>
            {isLoaded 
                ?
                <div>
                { mobile 
                    ?
                        <Menu pageWrapId={ "page-wrap" }  id="page-wrap" className="navBar" right>
                            {navBarMobile.map((item,key) =>
                                <ul key={key} className="navBarLabel">
                                    {item.label}
                                    {item.mobileLink.map((mobileItem,mobileKey) =>
                                            <li key={mobileKey}> 
                                                <Link to={mobileItem.href}> {mobileItem.label} </Link>
                                            </li>
                                        }
                                    )}
                                </ul>
                            )}
                        </Menu> 
                    : 
                    
                        <div>
                            
                        </div>
                    
                }
                </div>
                : 
                    <div> Loading... </div>
            }
        </div>
    );
  }
}
export default NavBar;