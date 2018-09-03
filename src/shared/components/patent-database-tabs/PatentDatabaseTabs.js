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
            activePatent: false,
            activeSoftware: false,
            tab: [{
                tabFor: 'Patentes'
            },{
                tabFor: 'Software'
            }],
            patentes: [{
                order: 'BR 10 2015 032685 8 A2',
                deposit: '28/12/2015',
                concession: '-',
                title: 'MOLÉCULAS COM NÚCLEO HÍBRIDO, COMPOSIÇÃO FARMACÊUTICA, PROCESSO DE SÍNTESE E SEUS USOS MOLÉCULAS COM NÚCLEO HÍBRIDO, COMPOSIÇÃO FARMACÊUTICA, PROCESSO DE SÍNTESE E SEUS USOS',
                resume: 'A presente invenção descreve moléculas com núcleo híbrido baseado em núcleos de tetraidroacridina e tianeptina, separados por cadeias espaçadoras metilênicas, via reação de acoplamento, uma composição farmacêutica compreendendo estas moléculas, um processo de síntese destas moléculas, e seus usos. A presente invenção se situa nos campos da Química Medicinal, Farmacologia e Medicina.',
                name: 'UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL (BR/RS) / LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA-LNCC (BR/RJ)',
                inventor: 'MARCO ANTONIO CESCHI / LEANDRA FRANCISCATO CAMPO / CARLOS ALBERTO SARAIVA GONÇALVES / EDUARDO LUIS KONRATH / JESSE SOBIESKI DA COSTA / DANIELA FRAGA DE SOUZA / JOÃO PAULO BIZARRO LOPES / VIKTOR SARAIVA CÂMARA / LAURENT EMMANUEL DARDENNE / ISABELLA ALVIM GUEDES / ANA LUIZA MARTINS KARL'
            },{
                order: 'PI 0402981-0 A2',
                deposit: '26/02/2004',
                concession: '-',
                title: 'POLINUCLEOTÍDEOS CODIFICADORES DE GENES DO CROMOSSO DA BACTÉRIA MYCOPLASMA SYNOVIAE, EXPRESSÃO E ATIVIDADE DESSES POLINUCLEOTÍDEOS E SUAS APLICAÇÕES',
                resume: 'POLINUCLEOTÍDEOS CODIFICADORES DE GENES DO CROMOSSOMO DA BACTÉRIA MYCOPLASMA SYNOVIAE, EXPRESSÃO E ATIVIDADE DESSES POLINUCLEOTÍDEOS E SUAS APLICAÇÕES". A invenção refere-se a polinucleotídeos constituídos pelas seqüências de nucleotídeos de um grupo que consiste de: ',
                resumeItems: [{
                    listItem: 'a) polinucleotídeos idênticos, com identidade de pelo menos 70%, às seqüências de nucleotídeos que codificam polipeptídeos caracterizados pelas seqüências de aminoácidos e de fragmentos das mesmas;',
                },{
                    listItem: 'b) polinucleotídeos idênticos, em pelo menos 70%, a polinucleotídeos que codificam os polipeptídeos correspondentes às seqüências listadas, e que podem ser isolados, preferencialmente, do cromossomo da M. synoviae 53; ',
                },{
                    listItem: 'c) polinucleotídeos que codificam polipeptídeos caracterizados por seqüências de aminoácidos idênticas, em pelo menos 70%, às seqüências de aminoácidos; ',
                },{
                    listItem: 'd) polinucleotídeos que são complementares aos polinucleotídeos de a, b ou c; ',
                },{
                    listItem: 'e) polinucleotídeos compreendendo bases nucleotídicas sucessivas das sequencias de polinucleotídeos a, b ou c; ',
                },{
                    listItem: 'f) um processo de cultivo, preferencialmente de M. synoviae 53, em que os genes codificados pelas seqüências de polinucleotídeos listadas sejam amplificados.',
                }],
                name: 'Laboratório Nacional de Computação Científica - LNCC (BR/RJ)',
                inventor: 'Arnaldo Zaha / Henrique Bunselmeyer Ferreira / Anamaria Aranha Camargo / Humberto Maciel França Madeira / Andrew G. Simpson / Christyanne Thomaz Martinkovics / Célia Maria de Almeida Soares / Maristela Pereira / Cícero Eduardo / Denise Maria Wanderlei Silva / Claudia Teixeira Guimaraes / Sílvia Neto Jardim / Edmundo Carlos Grissard / Fabrício Rodrigues dos Santos / Fábio Oliveira Pedrosa / Gilson Paulo Manfio / Fabiana Fantinatti Garboggini / Hector Nicolás Seuánez Abreu / Miguel Ângelo Martins Moreira / Jacqueline da Silva Batista / Julio Cézar de Mattos Cascardo / Juçara Farhat de Carvalho Parra / Laurimar Fiorentin / Itamar Antonio Piffer / Lucymara Fassarella Agnez Lima / Ana Tereza Ribeiro de Vasconcelos / Dirce Maria Carraro / Irene Silveira Schrank / Marilene Henning Vainstein / Jorge Ivan Rebelo Porto / Silvia Regina Batistuzzo de Medeiros / Marcelo Brocchi / Rosana de Almeida / Maria Paula Cruz Schneider / Maria Sueli Soares Felipe / Marcelo de Macedo Brígido / Andrea Queiroz Maranhão / Mariangela Hungria da Cunha / Nara Suzy de Freitas / Maria do Carmo Catanho Pereira Lyra / Rosane Garcia Collevatti / Sérgio Danilo Junho Pena / Sandro Luis Bonatto / Glória Regina Franco / Santuza Maria Ribeiro Teixeira / Spartaco Astolfi Filho / Izeni Pires Farias / Thalles Barbosa Grangeiro / Turan Peter Urmenyi / Viridiana Santana Ferreira Leitão / Maria Antonieta Ferrara / Elba Pinto da Silva Bom / Deise Porto Potrich'
            }],
            software: [{
                order: 'BR 51 2014 000156 3',
                deposit: '13/02/2014',
                language: 'CSS / HTML / JAVA / JAVASCRIPT / JSP / SQL / XML',
                title: 'ATOMS: ACUTE MYORARDIAL INFARCTION TELECONSULTATION AND MONITORING SYSTEM',
                holder: 'LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA',
                author: 'ANTÔNIO TADEU AZEVEDO GOMES / ARTUR ZIVIANI / BRUNO DE SOUZA PINTO MARQUES CORREA / BRUNO FERNANDES BASTOS / IURI MALINOSKI TEIXEIRA'
            },{
                order: '14015-4',
                deposit: '06/08/2012',
                language: 'C++',
                title: 'HYDROPHONIC POLAR MODEL FOLDER - HYPOFOLD',
                holder: 'LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA',
                author: 'FÁBIO LIMA CUSTÓDIO / HÉLIO JOSÉ CORRÊA BARBOSA / LAURENT EMMANUEL DARDENNE'
            },{
                order: 'BR 51 2015 000794 7',
                deposit: '24/07/2015',
                language: 'ATL / CSS / HTML / JAVA / JAVASCRIPT / JPS / SQL / XML / XSTL',
                title: 'SPLICE: A SOFTWARE PRODUCT LINE FOR HEALTHCARE',
                holder: 'LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA',
                author: 'ANDERSON LUIZ MENEZES / ANTÔNIO TADEU AZEVEDO GOMES / ARTUR ZIVIANI / BRUNO DE SOUZA PINTO MARQUES CORREA / IURI MALINOSKI TEIXEIRA / VINÍCIUS DE MACEDO MOREIRA'
            },{
                order: 'BR 51 2016 001687 6',
                deposit: '09/12/2016',
                language: 'C / C++ / FORTRAN',
                title: 'MULTISCALE SHALE GAS SIMULATOR - MSSHALEGAS',
                holder: 'LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA',
                author: 'ALINE CRISTINA DA ROCHA / CLAUDE BOUTIN / EDUARDO LUCIO MENDES GARCIA / JOSÉ MARCOS PILATO JÚNIOR / MÁRCIO ARAB MURAD / PATRICIA DE ARAUJO PEREIRA / SIDARTA ARAÚJO LIMA / TIEN DUNG LE / TUANE VANESSA LOPES / VINICIUS CARVALHO DA ROCHA PESSÔA'
            },{
                order: 'BR 51 2017 001105 2',
                deposit: '21/08/2017',
                language: 'C',
                title: 'RADNET-S',
                holder: 'INSTITUTO ALBERTO LUIZ DE COIMBRA DE PÓS GRADUAÇÃO E PESQUISA DE ENGENHARIA - COPPE/UFRJ / LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA',
                author: 'CLÁUDIO LUÍS DE AMORIM / HERBERTE FERNANDES DE MORAES / MICHAEL DOUGLAS BARRETO E SILVA / PAULO CABRAL FILHO / RENATO DE CASTRO DUTRA'
            },{
                order: '11594-3',
                deposit: '13/01/2011',
                language: 'PYTHON',
                title: 'PYIMAGEVIS',
                holder: 'LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA',
                author: 'DIEGO AUGUSTO THOMAZ QUADRADO LEITE / GILSON ANTONIO GIRALDI / LUIZ CLÁUDIO MESQUITA DE AQUINO / PEDRO HENRIQUE MARQUES LIRA'
            },{
                order: '13318-3',
                deposit: '01/06/2012',
                language: 'C++ / FORTRAN',
                title: 'DOCKTHOR',
                holder: 'LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA',
                author: 'CAMILA SILVA DE MAGALHÃES / DIOGO MARINHO ALMEIDA / HÉLIO JOSÉ CORRÊA BARBOSA / LAURENT EMMANUEL DARDENNE'
            },{
                order: '13315-4',
                deposit: '01/06/2012',
                language: 'BASH / CC++ / SCRIPT',
                title: 'PROTEIN FRAGMENT GENERATION - PROFRAGER',
                holder: 'LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA',
                author: 'FÁBIO LIMA CUSTÓDIO / KARINA BAPTISTA DOS SANTOS / LAURENT EMMANUEL DARDENNE'
            },{
                order: '13316-6',
                deposit: '01/06/2012',
                language: 'C++',
                title: 'GENETIC ALGORITHMS FOR HP MODEL - GAHP',
                holder: 'LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA',
                author: 'FÁBIO LIMA CUSTÓDIO / HÉLIO JOSÉ CORRÊA BARBOSA / LAURENT EMMANUEL DARDENNE'
            },{
                order: '13317-1',
                deposit: '01/06/2012',
                language: 'C++',
                title: 'GENETIC ALGORITHMS FOR PROTEIN FOLDING - GAPF',
                holder: 'LABORATÓRIO NACIONAL DE COMPUTAÇÃO CIENTÍFICA',
                author: 'FÁBIO LIMA CUSTÓDIO / HÉLIO JOSÉ CORRÊA BARBOSA / LAURENT EMMANUEL DARDENNE'
            }]
        }
    }
    activePatent(e){
        e.preventDefault();
        if(this.tabFor === 'Patentes'){
            this.setState({
                activePatent: !this.state.activePatent
             })
             console.log(this.state.activePatent)
        } else {
            this.setState({
                activeSoftware: !this.state.activeSoftware
             })
        }
    }
    render(){
        const {tab,patentes,software} = this.state;
        return(
            <DefaultTable Title="Banco de Patentes do LNCC">
                <Tabs
                    defaultTab="Patentes"
                    onChange={(tabId) => {console.log(tabId)}}
                >
                    <TabList className="tabList">
                        {tab.map((tabItem,tabKey) =>
                            <Tab key={tabKey} tabFor={tabItem.tabFor}  onClick={() => this.activeTab}> {tabItem.tabFor} </Tab>
                        )}
                    </TabList>
                    <TabPanel tabId="Patentes">
                        {patentes.map((item,key) =>
                            <div key={key} className="patentesContainer">
                                <p> <b> Nº do Pedido: </b> {item.order}</p>
                                <p> <b> Data do Depósito: </b> {item.deposit} </p>
                                <p> <b> Data da concessão: </b> {item.concession} </p>
                                <p> <b> Título: </b> {item.title} </p>
                                <p> <b> Resumo: </b> {item.resume} </p>
                                {item.resumeItems && <div>
                                {item.resumeItems.map((resumeItem,resumeKey) =>
                                    <p key={resumeKey} className="resumeItem"> {resumeItem.listItem} </p>
                                )}
                                </div>}
                                <p> <b> Nome do Depositante: </b> {item.name} </p>
                                <p> <b> Nome do Inventor: </b> {item.inventor} </p>
                            </div>
                        )}
                    </TabPanel>
                    <TabPanel tabId="Software">
                        {software.map((item,key) =>
                            <div key={key} className="patentesContainer">
                                <p> <b> Nº de Registro: </b> {item.order} </p>
                                <p> <b> Data do Depósito: </b> {item.deposit} </p>
                                <p> <b> Linguagem: </b> {item.language} </p>
                                <p> <b> Título: </b> {item.title} </p>
                                <p> <b> Nome do Titular: </b> {item.holder} </p>
                                <p> <b> Nome do Autor: </b> {item.author} </p>
                            </div>
                        )}
                    </TabPanel>
                </Tabs>
            </DefaultTable>
        )
    }
}

export default PatentDatabaseTabs