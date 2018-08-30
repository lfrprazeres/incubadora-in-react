import React from 'react'
import {
    DefaultTable
} from '../../layouts'

class OpportunitiesTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opportunity:[{
                title: 'Aplicativo Aqua',
                text: '– Aplicativo com foco em descobrir vazamentos, focando em facilidade de utilização pelo usuário ou funcionário de empresas público/privada. (Pré-projeto).'
            },{
                title: 'CicloShadow ',
                text: '– Startup growth stage, com protótipos testados, P D&I, atua na área de saúde, sustentabilidade e de impacto ambiental, oferecendo produto: “Sombreiros especiais, universais e recicláveis que serão acoplados a bicicletas e similares.”'
            },{
                title: 'Energia Eólica / Cubo de Vento ',
                text: '– O cubo de vento é uma turbina eólica com velas concentradoras de vento e esta pronta e funcionando há 3 anos. Pode gerar 10MW em geração ultradistribuída, com retorno em menos de 2 anos.'
            },{
                title: false,
                text: 'Portal para otimizar e organizar processos de atendimento realizado aos alunos da unidade Pitágoras Guarapari. O projeto está em fase de construção e inicialmente terá uma abrangência para 5 mil alunos.'
            },{
                title: 'Acessório protótipo para celular ',
                text: '– Ideia consiste em criar um suporte para celular, retrátil para colocar no pulso. (Protótipo).'
            },{
                title: 'Projeto Educacional ',
                text: '– Ideia que consiste em um grande projeto de educação contínua, para profissionais e adeptos que giram em torno da vida animal e qual os veterinários atuam. Focando em 3 avatares; Pessoas que gostam de animais, acadêmicos de medicina veterinária e profissionais médicos veterinários.'
            },{
                title: 'Problema do Caixeiro ',
                text: '- Pelo método problemas com até 100 nós podem ser resolvidos manualmente em tempo aceitável. O algoritmo para problemas maiores está pronto. E também o método pode ser usado para árvores geradoras de peso mínimo. Pelo método foi possível sua formulação em programação linear inteira binária que evita a explosão das restrições para evitar os ciclos (rotas pró hamiltonianas).'
            },{
                title: 'Aplicativo de prestadores de serviço em geral',
                text: ' - Criação de um aplicativo que reunira os mais diversos prestadores de serviços, como eletricistas, montadores, pintores, entre outros. Que quando cadastrados o cliente poderá fazer o filtro para selecionar o profissional a partir do serviço que deseja realizar.'
            },{
                title: 'Aplicativo chef em casa',
                text: ' - Criação de um aplicativo que reunirá chefs de cozinha, confeiteiros e cozinheiros. E quando cadastrados o cliente poderá fazer o filtro para selecionar o profissional, a partir do cardápio que deseja realizar e sua finalidade.'
            },{
                title: 'Sistema de rastreamento de objetos',
                text: ' - Desenvolvimento de um sistema que permite a localização geográfica de objetos, por meio de um micro chip de rastreamento, que será anexado ao produto, e dará a localização exata de sua coordenada geográfica em tempo real.'
            },{
                title: 'Sistema para Operadoras',
                text: ' - Desenvolvimento de sistema para operadoras, que permite reunir todas as ligações e solicitações do cliente, durante seu contrato de permanência.'
            },{
                title: 'Botão de acionamento de alerta de assaltos em coletivos',
                text: ' - Desenvolver um botão de acionamento no transporte coletivo, com a emissão de alerta de furtos e arrastões, que acionará o comando policial e a viatura mais próxima ao local de localização do coletivo.'
            },{
                title: 'Aplicativo de leitura de encanamento, através de sensor de calor, via câmera do smartphone',
                text: ' - Criação de um aplicativo que permite a leitura do encanamento, através de sensor de calor, via câmera do smartphone. Problema que deseja solucionar: Acidentes de furar encanamentos são comuns nas mãos mais experientes ou não, e não é nada agradável.'
            },{
                title: 'Serve Startup',
                text: ' - A proposta principal da Startup é usar a Realidade Virtual e Realidade Aumentada (VR/VA), para o desenvolvimento da educação no Brasil.'
            },{
                title: 'Idea',
                text: ' - Consistem em instalar nas faixas de segurança de maior relevância (saídas de escolas, empresas, supermercados, etc.) SEM semáforos, um sinalizador luminoso sobre as vias que é acionado pelos pedestres, alertando os motoristas ao longo da via a intenção do pedestre de cruzar ou já estar atravessando a mesma.'
            },{
                title: 'Viagemterrestre.com',
                text: ' - Utilizaríamos uma plataforma gps ou waze onde informaríamos a placa do veiculo que estamos dirigindo e o trajeto que vamos fazer, exemplo saindo de são paulo indo para campinas, o aplicativo nos informa a quantidade de pedágios e realizaríamos o pagamento online, podendo assim passar pelas cancelas do sem parar, pois o sistema faria a leitura da placa do veiculo e a cancela seria liberada. O cliente evitaria filas e ficaria muito satisfeito e aumentariam as cancelas do sem parar. No aplicativo poderia também programar uma parada para abastecimento do veiculo onde teríamos os valores dos combustíveis cadastrados e o cliente poderia parar no posto que julgue ser o mais adequado. Poderíamos cadastrar mais serviços e produtos... Fiz uma breve descrição do que seria o aplicativo e apostem teriam uma aceitação muito boa.'
            }]
        }
    }
    render(){
        const { opportunity } = this.state;
        return(
            <DefaultTable Title="Oportunidade">
                {opportunity.map((item,key) =>
                    <div key={key} className="tableContainer">
                        <p>
                            <b> {item.title} </b>
                            {item.text}
                        </p>
                    </div>
                )}
            </DefaultTable>
        )
    }
}

export default OpportunitiesTable