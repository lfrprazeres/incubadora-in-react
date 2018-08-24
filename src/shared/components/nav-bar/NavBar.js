import React from 'react'
import {Link} from 'react-router-dom'
import {Image} from '../'
import './NavBar.css'

class NavBar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            link:[{
                label: false,
                href: 'incubadora.lncc.br',
                image: 'logoNav.png',
                arrow: false,
                subLink: false
            },{
                label: 'A Incubadora',
                href: '#',
                image: false,
                arrow: true,
                subLink:[{
                    text: 'Quem Somos',
                    href: '/Quem-somos'
                },{
                    text: 'Regimento Interno',
                    href: '/Regime-interno'  
                },{
                    text: 'Equipe',
                    href: '/Equipe'  
                }]
                
            },{
                label: 'Serviços',
                href: '#',
                image: false,
                arrow: true,
                subLink:[{
                    text: 'Oportunidades',
                    href: '/Oportunidades'
                },{
                    text: 'Banco de Patentes',
                    href: '/Banco-de-Patentes'  
                },{
                    text: 'Perguntas Frequentes',
                    href: '/Perguntas-Frequentes'
                }]
                
            },{
                label: 'Empresas',
                href: '#',
                image: false,
                arrow: true,
                subLink:[{
                    text: 'Empresas Residentes',
                    href: '/Empresas-Residentes'
                },{
                    text: 'Empresas Graduadas',
                    href: '/Empresas-Graduadas'  
                }]
            },{
                label: 'Processo Seletivo',
                href: '#',
                image: false,
                arrow: true,
                subLink:[{
                    text: 'Seleção',
                    href: '/Selecao'
                },{
                    text: 'Edital 2018',
                    href: '/edital' 
                }]
            },{
                label: 'Contato',
                href: '#',
                image: false,
                arrow: false,
            }]
        }
    }
    render(){
        const{link} = this.state;
        return(
            <nav>
                <ul>
                    {link.map((item,key) =>
                        <li key={key}>
                            {item.image && <Image source={item.image} className="imgNav"/>}
                            {item.label && <Link to={item.href} > {item.label}</Link>}
                            {item.subLink && <div className="dropdown-container">
                            <ul className="dropdown">
                                {item.subLink.map((subLinkItem, subLinkKey) =>
                                    <li key={subLinkKey}>
                                        <Link to={subLinkItem.href}> {subLinkItem.text} </Link>
                                    </li>
                                )}
                            </ul>
                        </div>}
                        </li>
                    )}
                </ul>
            </nav>
        )
    }
}
export default NavBar;