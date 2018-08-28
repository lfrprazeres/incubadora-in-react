import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import {
    NavBar,
    Image,
    Footer
} from '../../shared/components'
import {
    DefaultLayout
} from '../../shared/layouts'
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            paragraph: [{
                text: 'Localizado no Laboratório Nacional de Computação Científica (LNCC) e sede do Super Computador Santos Dumont, a incubadora do LNCC tem por missão tirar projetos do papel e transformar conhecimentos em novos produtos, serviços e processos. Incentiva a inovação tecnológica e a transferência de tecnologia, inserindo seus projetos inovadores no mercado nacional e internacional.',
                href: false
            },{
                text: 'Com o Edital de Fluxo Continuo a incubadora do LNCC recebe durante todo o ano projetos cujos processos ou serviços são desenvolvidos por meio de pesquisas científicas e tenham potencial de impacto no desenvolvimento econômico-social do país. ',
                href: false
            },{
                text: 'Conheça nosso',
                label: 'processo seletivo.',
                href: '/selecao'
            }]
        }
    }
    render(){
        const { paragraph } = this.state;
        return(
            <div className="homePage">
                <NavBar />
                <div className="homeBanner">
                    <div>
                        <Link to="/selecao"> <Image source="banner.png" /> </Link>
                    </div>
                </div>

                <div className="homePage-content"> 
                    <h1 className="default-title"> Quem Somos </h1>
                    <div className="LNCCImage">
                        <Image source="LNCC.png" />
                    </div>
                    <h4> Foto: Matheus Mendonça </h4>

                    {paragraph.map((item,key) =>
                    <p key={key}> 
                        {item.text}
                        {item.href && <Link to={item.href}> {item.label} </Link>}
                    </p>
                )}
                </div>

                <Footer />
            </div>
        )
    }
}

export default HomePage;