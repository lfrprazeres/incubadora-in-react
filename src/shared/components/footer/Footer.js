import React from 'react';
import './Footer.css'

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contact: [{
                class: 'facebook',
                href: 'https://www.facebook.com/lnccincubadora/?ref=br_rs',
                icon: 'fa fa-facebook-f',
                label: 'Incubadora LNCC'
                
            },{
                class: 'youtube',
                href: 'https://www.youtube.com/channel/UC016-yPzN4KrE7O0pa1nagw',
                icon: 'fa fa-youtube-play',
                label: 'Incubadora LNCC'
            },{
                class: 'phone',
                href: false,
                icon: 'fa fa-phone',
                label: '( 24 ) 2233-6232'
            },{
                class: 'mail',
                href: false,
                icon: 'fa fa-envelope',
                label: 'incubadora@lncc.br'
            }]
        }
    }
    render(){
        const {contact} = this.state;
        return(
            <footer>
                <div className="footer-content">
                    <h1> Contato </h1>
                    <div className="contactContainer">
                        {contact.map((item,key) =>
                            <div   className="contact" key={key}>
                                <a href={item.href ? item.href : undefined} className={item.class} target="_blank"> <i className={item.icon}> </i> </a>
                                <a href={item.href ? item.href : undefined} className={item.class} target="_blank"> <p> {item.label} </p> </a>
                            </div>
                        )}
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;