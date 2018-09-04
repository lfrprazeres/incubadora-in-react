import React from 'react'
import {Link} from 'react-router-dom'
import {
    DefaultLayout,
    Companies
} from '../../shared/layouts'

class GraduateCompanies extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            company: [{
                open: false,
                logo: 'neki_it.png',
                name: 'Neki-IT',
                paragraph: [{
                    text: "Atuando no mercado desde 2002, a Neki-IT é uma empresa brasileira de Tecnologia da Informação, que conta com a expertise de um grande time de profissionais altamente qualificados e certificados, utilizando-se das melhores ferramentas e metodologias para oferecer soluções em softwares, serviços e consultoria, sempre com foco na otimização de resultados.",
                },{
                    text: "Alguns dos serviços que oferece no mercado são: "
                },{
                    text: "Fábrica de Software: ",
                    unorderedList: [{
                        text:'- Sustentação de sistemas Web(Java,.Net, PHP, Mobile(iOs, Android), ...) ',
                    },{
                        text:'- Desenvolvimento sob medida ',
                    },{
                        text:'- Suporte a sistemas ',
                    },{
                        text:'- Desenvolvimento de Integrações ',
                    },{
                        text:'- Portal de APIs: implementação ',
                    },{
                        text:'- Chatbot: implementação ',
                    }]
                },{
                    text: "Consultoria:",
                    unorderedList: [{
                        text:'- Arquitetura de sistemas (Java, .Net, Mobile (iOS e Android);',
                    },{
                        text:'- I.C. (Integração Contínua);',
                    },{
                        text:'- Implantação de processo de Software com ALM (Application Lifecycle Management)',
                    },{
                        text:'- Tuning de aplicações Web (Java, .Net, Mobile, …)',
                    },{
                        text:'- Portal de API: Mapeamento Negócio',
                    }]
                },{
                    text: "Produtos próprios:",
                    unorderedList: [{
                        text:'- N-Tiss: Produto para unificar a plataforma de comunicação entre prestador e operadora para transações TISS na área de saúde',
                    },{
                        text:'- E-Fatura+: Recuperação e otimização de receita Hospitalar com planos de saúde(Em construção)',
                    },{
                        text:'- Collaborator: Aplicação de integração a ALM de mercado para gestão de força de trabalho em projetos, auxiliando no controle operacional e financeiro dos projetos.',
                    },{
                        text:'- APP Cliente Saúde: App criado para interagir com os clientes das operadoras de saúde, permitindo que o cliente tenha acesso aos sua rede de médicos, hospitais,clinicas. Senhas de autorizações, Reembolsos, Canal de atendimento, acesso ao call center, atendimento com inteligência artificial, entre outros.',
                    }]
                },{
                    text: "Localizada no Parque Tecnológico da Região Serrana, a Neki IT é uma empresa brasileira de Tecnologia da Informação que oferece soluções em software."
                }],
                partner: [{
                    label: 'Silvio Eberardo Branco Vidal Bustamante '
                },{
                    label: 'Marcelo Rodrigues'
                }],
                contact: [{
                    label: 'E-mail: comercial@neki-it.com.br'
                },{
                    label: 'Site: http://neki-it.com.br/'
                }]
            }
            
            ,
            
            {
                open: false,
                logo: 'biometric_it.png',
                name: 'AprendaNet',
                paragraph: [{
                    text: 'se propõem a integrar educação – ciência - inovação via TI e produção de massa individualizada via Web 2.0. É distribuidora exclusiva da Maplesoft no Brasil com direitos de exportação para a América do Sul e África portuguesa. '
                },{
                   text: 'Sua principal inovação denomina-se Plataforma Professor Global e também atua na física fotônica. A inovação Plataforma Professor Global disponibiliza 4 mil funções matemáticas a serem atuadas interativamente através das mídias internet, celular e TV digital. '
                },{
                    text: 'Webfica o ensino e o trabalho na área das exatas. Promove produtividade no cálculo e simulação. Atua na inclusão digital, ensino médio, universitário, institutos, empresas, bancos, governo. Diminui custos e tempo de seus cursos e projetos. Integra educação – ciência - inovação e oferece educação de massa personalizada via TI.'
                }],
                partner: [{
                    label: 'Renato Doria'
                }],
                contact: [{
                    label: 'Tel: (24) 2237-0625'
                },{
                    label: 'E-mail: doria@aprendanet.com.br '
                },{
                    label: 'Site: http://www.professorglobal.com.br/'
                }]
            }
            
            ,
            
            {
                open: false,
                logo: 'pajesystem.jpg',
                name: 'Paje System',
                paragraph: [{
                    unorderedList: [{
                        text: 'é uma empresa que desenvolve tecnologia de reconhecimento e identificação de pessoas por biometria para aplicações em segurança pública e privada. ',
                    }]
                },{
                    unorderedList: [{
                        text:'Dentre os reconhecimentos biométricos mais utilizadas em nossos produtos destacam-se a identificação automática de digitais (AFIS - Automated Fingerprint Identification System), o reconhecimento facial em tempo real, e a identificação e reconhecimento de pessoas por DNA.',
                    }]
                },{
                    unorderedList: [{
                        text:'Nossos produtos também têm muita expertise policial embarcada, e se constituem na melhor solução para equipar as Superintendências de Polícia Técnica das Polícias Civis, e para os Departamentos de Seguranças de empresas públicas e privadas.',
                    }]
                }],
                partner: [{
                    label: 'Boaz Ramos de Avellar Junior'
                },{
                    label: 'David Leite de Avellar'
                }],
                contact: [{
                    label: 'E-mail: comercial@neki-it.com.br'
                }]
            }
            
            ,
            
            {
                open: false,
                logo: 'R4-enterprise.png',
                name: 'R4Enterprise',
                paragraph: [{
                    unorderedList: [{
                        text: 'é uma empresa que desenvolve tecnologia de reconhecimento e identificação de pessoas por biometria para aplicações em segurança pública e privada. ',
                    }]
                },{
                    unorderedList: [{
                        text:'Dentre os reconhecimentos biométricos mais utilizadas em nossos produtos destacam-se a identificação automática de digitais (AFIS - Automated Fingerprint Identification System), o reconhecimento facial em tempo real, e a identificação e reconhecimento de pessoas por DNA.',
                    }]
                },{
                    unorderedList: [{
                        text:'Nossos produtos também têm muita expertise policial embarcada, e se constituem na melhor solução para equipar as Superintendências de Polícia Técnica das Polícias Civis, e para os Departamentos de Seguranças de empresas públicas e privadas.',
                    }]
                }],
                partner: [{
                    label: 'Marcos Huber Mendes'
                },{
                    label: 'André Gustavo Guimarães da Cunha'
                }],
                contact: [{
                    label: 'E-mail: comercial@neki-it.com.br'
                }]
            }]
        }
    }
    OpenModal = () => {
        this.setState({ 
            openIt: !this.state.open
        });
    };
    CloseModal = () => {
        this.setState({ 
            open: false 
        });
    };
    render(){
        const { company } = this.state
        return(
            <DefaultLayout title="Empresas Graduadas">
            <div className="companiesContainer">
                {company.map((item,key) =>
                    <Companies 
                        key={key}
                        className={((key + 1) % 2 === 0) ? 'company reverse' : 'company'}
                        image={item.logo}
                        paragraph={
                            item.paragraph.map((pItem,pKey) =>
                                <div key={pKey}>
                                    <p key={pKey}>
                                        {(pKey === 0) && <b> A {item.name} </b>}{pItem.text}
                                    </p>
                                    {pItem.unorderedList && <div>
                                        {pItem.unorderedList.map((unorderedListItem,unorderedListKey) =>
                                            <p key={unorderedListKey} className="unorderedList"> {unorderedListItem.text} </p>
                                        )}
                                    </div>}
                                </div>
                        )}
                        partner={
                            item.partner.map((partnerItem,partnerKey) =>
                                <p key={partnerKey} className="partner">
                                    {partnerItem.label}
                                </p>
                        )}
                        contact={
                            item.contact.map((contactItem,contactKey) =>
                                <p key={contactKey} className="contact">
                                    {contactItem.label}
                                </p>
                        )}
                        open={item.open}
                        toOpen={this.OpenModal}
                        toClose={this.CloseModal}
                    />
                )}
            </div>
            <div className="afterCompanies">
                <p> Quer conhecer as empresas residentes </p>
                <Link to="/empresas-residentes"> Clique Aqui! </Link>
            </div>
            </DefaultLayout>
        )
    }
}

export default GraduateCompanies