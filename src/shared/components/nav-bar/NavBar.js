import React from 'react'
import {Link} from 'react-router-dom'
import {Image} from '../'
import './NavBar.css'
import { stack as Menu } from 'react-burger-menu'
import './NavBarMobile.css'
 
class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobileVersion: false,
            width: 0,
            height: 0,
            navBarMobile: [{
                label: 'A Incubadora',
                link: true,
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
                link: false,
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
                link: false,
                mobileLink: [{
                    label: 'Empresas Residentes',
                    href: '/empresas-residentes'
                },{
                    label: 'Empresas Graduadas',
                    href: '/empresas-graduadas'
                }]
            },{
                label: 'Processo Seletivo',
                link: false,
                mobileLink: [{
                    label: 'Seleção',
                    href: '/selecao'
                },{
                    label: 'Edital 2018',
                    href: '/edital-2018'
                }]
            },{
                label: 'Contato',
                href: '/contato',
                mobileLink: false,
                link: true
            }]
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
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
      const {width,navBarMobile} = this.state;
      const mobile = width < 1700;
    return (
            <div>
            { mobile 
                ?
                    <Menu pageWrapId={ "page-wrap" }  id="page-wrap" className="navBar" right>
                        {navBarMobile.map((item,key) =>
                            <ul key={key} className="navBarLabel">
                                {item.mobileLink && item.label}
                                {!item.mobileLink && <Link to={item.href}> {item.label} </Link>}
                                {item.mobileLink && <div className="mobileLinksContainer">
                                    {item.mobileLink.map((mobileLinkItem,mobileLinkKey) =>
                                        <li key={mobileLinkKey}>
                                            <Link to={mobileLinkItem.href}> {mobileLinkItem.label} </Link>
                                        </li>
                                    )}
                                </div>}
                            </ul>
                        )}
                    </Menu> 
                : 
                
                    <div>
                        it is not mobile
                    </div>
                
            }
            </div>
    );
  }
}
export default NavBar;