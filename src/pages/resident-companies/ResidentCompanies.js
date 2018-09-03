import React from 'react'
import './ResidentCompanies.css'
import { Link } from 'react-router-dom'
import {
    DefaultLayout,
    Companies
} from '../../shared/layouts'

class ResidentCompanies extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            company: [{
                logo: 'pauta_online.png',
                name: 'Pauta Online',
                paragraph: [{
                    text: 'é uma plataforma para educação online, desenhada para ajudar qualquer pessoa que detenha conhecimentos e deseje compartilhá-los - desde um professor ou especialista em determinada área, até grandes empresas ou Instituições. ',
                },{
                    text: 'A principal diferença da Pauta Online, é que ela não é apenas um repositório de conteúdo na internet e nem um sistema que precise ser instalado em um servidor: Trata-se de um avançado Ambiente Virtual de Aprendizagem (AVA), que une educadores e alunos em prol do sucesso no processo de ensino-aprendizagem, com o uso de tecnologias na educação. ',
                },{
                    text: 'A Pauta Online foi selecionada pela FAPERJ, através de edital de subvenção, como um dos projetos inovadores do Estado do Rio de Janeiro.',
                }],
                partner: [{
                    label: 'Marcilene Scantamburlo Fonseca '
                },{
                    label: 'Jorge Valardan'
                }]
            },{
                logo: 'biometric_it.png',
                name: 'Biometric IT',
                paragraph: [{
                    text: 'é uma empresa que desenvolve tecnologia de reconhecimento e identificação de pessoas por biometria para aplicações em segurança pública e privada. ',
                },{
                    text: 'Dentre os reconhecimentos biométricos mais utilizadas em nossos produtos destacam-se a identificação automática de digitais (AFIS - Automated Fingerprint Identification System), o reconhecimento facial em tempo real, e a identificação e reconhecimento de pessoas por DNA.',
                },{
                    text: 'Nossos produtos também têm muita expertise policial embarcada, e se constituem na melhor solução para equipar as Superintendências de Polícia Técnica das Polícias Civis, e para os Departamentos de Seguranças de empresas públicas e privadas.',
                }],
                partner: [{
                    label: 'Mauricio Carvalho Xavier'
                }]
            },{
                logo: 'pajesystem.jpg',
                name: 'Paje System',
                paragraph: [{
                    text: 'é um sistema de apoio a decisão médica. Mas acessível aos pacientes com acesso as suas informações de pressão arterial e glicemia por exemplo, através de gráficos e relatórios de orientações de cuidados médicos específicos. ',
                },{
                    text: 'Em segundo nível um profissional de saúde terá acesso aos relatórios do grupo de pessoas sob seus cuidados e receberá relatórios e chamadas de alarmes para pacientes com elevada probabilidade de sofrer complicações cardiovasculares e assim possa desencadear sua participação profissional dos cuidados específicos para mitigar uma provável emergência médica. ',
                },{
                    text: 'Em um terceiro nível, um gestor de saúde (patrocinador do custeio da assistência à saúde) de secretaria municipal ou estadual de saúde, ou um gestor de planos de saúde, onde a otimização de desempenho profissional maximizado por identificar complicações cardiovasculares em sua fase inicial terão um custeio menor, assim fica caracterizado a minimização das complicações e consequente redução dos custos assistenciais. Temos a esperança de sensibilizar aos técnicos do Ministério da Saúde do Brasil, para a relevância deste projeto.',
                }],
                partner: [{
                    label: 'Boaz Ramos de Avellar Junior'
                },{
                    label: 'David Leite de Avellar'
                }]
            },{
                logo: 'R4-enterprise.png',
                name: 'R4Enterprise',
                paragraph: [{
                    text: ', com a utilização de uma tecnologia inovadora para desenvolvimento de Software, pretende permitir ao usuário típico do Mercado, sem conhecimento de linguagens de programação, o fácil acesso a complexos procedimentos Estatísticos, de Engenharia e de Física. ',
                },{
                    text: 'Nossa tecnologia inovadora se constitui em conseguir unir aplicativos e linguagens de programação, extensivamente utilizados no mercado, com uma linguagem livre de programação matemática e estatística mundialmente reconhecida, de forma a obter um ambiente de desenvolvimento de baixo custo, extremamente ágil na velocidade de desenvolvimento, e com alta performance e grande acurácia. ',
                },{
                    text: 'Assim disponibilizamos para o usuário típico do Mercado, nos aplicativos mais utilizados pelo Mercado e com toda a facilidade de acesso e de usabilidade destes aplicativos, o potencial de conseguir utilizar procedimentos que foram desenvolvidos por uma linguagem científica.',
                }],
                partner: [{
                    label: 'Marcos Huber Mendes'
                },{
                    label: 'André Gustavo Guimarães da Cunha'
                }]
            }]
        }
    }
    render(){
        return(
            <DefaultLayout title="Empresas Residentes">
                {this.state.company.map((item,key) =>
                    <Companies 
                        key={key}
                        className={((key + 1) % 2 === 0) ? 'company reverse' : 'company'}
                        image={item.logo}
                        paragraph={
                            item.paragraph.map((pItem,pKey) =>
                                <div key={pKey}>
                                    <p> {(pKey === 0) && <b> A {item.name} </b>} {pItem.text}</p>
                                </div>
                        )}
                        partner={
                            item.partner.map((partnerItem,partnerKey) =>
                                <p key={partnerKey} className="partner">
                                    {partnerItem.label}
                                </p>
                        )}
                    />
                )}
                <div className="afterCompanies">
                    <p> Quer conhecer as empresas graduadas </p>
                    <Link to="/empresas-graduadas"> Clique Aqui! </Link>
                </div>
                
            </DefaultLayout>
        )
    }
}

export default ResidentCompanies