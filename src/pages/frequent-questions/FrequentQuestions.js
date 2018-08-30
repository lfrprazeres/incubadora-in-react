import React from 'react'
import './FrequentQuestions.css'
import {
    DefaultLayout
} from '../../shared/layouts'

class FrequentQuestions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            container: [{
                question: 'O que é uma Incubadora de Empresas? ',
                answer: 'É um local especialmente criado para abrigar novas empresas oferecendo estrutura para auxiliar, capacitar e favorecer os resultados positivos nos seus primeiros anos de existência. Para isso a Incubadora oferece apoio gerencial e técnico e outros serviços auxiliares que propiciam excelentes oportunidades de negócios e parcerias, para que você desenvolva seu projeto e transforme-o em uma empresa de sucesso.',
                angle: 'fa fa-angle-right'
            },{
                question: 'As incubadoras recebem empresas de todos os tipos? ',
                answer: 'As incubadoras de base tecnológica, como a INCUBADORA DO LNCC, recebem empresas de base tecnológica, responsáveis por algum tipo de inovação em produtos, processos, componentes ou acessórios. Que tenham vinculo com a pesquisa do LNCC.',
                angle: 'fa fa-angle-right'
            },{
                question: 'Qual a diferença entre aceleradoras e incubadoras? ',
                answer: 'Estamos acostumados a ouvir sobre incubadoras de empresas, mas a partir desse ano você se fala muito sobre aceleradoras. Isso acontece porque acredita-se hoje que podem existir soluções diferentes além da incubação para apoiar empresas nascentes, justamente porque empresas com estágios e objetivos diferentes precisam de apoio de formas diferentes.',
                orderedList: [{
                    itemList: 'Normalmente, incubadoras buscam apoiar pequenas empresas de acordo com alguma diretiva governamental ou regional. Por exemplo, incentivar projetos de biotecnologia devido à proximidade de algum centro de pesquisa nessa área, ou fomentar a indústria de telecomunicações em uma região que precisa de expansão nesse setor.',
                },{
                    itemList: 'Aceleradoras, por sua vez, são focadas não em uma necessidade prévia, mas sim em empresas que tenham o potencial para crescerem muito rápido. Justamente por isso, aceleradoras buscam startups escaláveis (e não somente uma pequena empresa promissora).',
                },{
                    itemList: 'Incubadoras pedirão seu plano de negócio, e aceleradoras estudarão seu modelo de negócio – a verba pública que normalmente apoia as incubadoras pede maior formalidade e transparência na avaliação de projetos, além de terem mais critérios ao avaliarem um plano completo. Aceleradoras apostam somente em uma boa ideia.',
                },{
                    itemList: 'Aceleradoras são lideradas por empreendedores ou investidores experientes, enquanto incubadoras têm gestores com experiência em mediar o poder público, as universidades e empresas. Isso é devido às aceleradoras usarem capital privado para seu próprio financiamento, e incubadoras aproveitarem a disponibilidade de verbas públicas em editais tanto para si próprias como também para os incubados.',
                },{
                    itemList: 'Enquanto aceleradoras são fortemente apoiadas em sessões de mentoring – seja em palestras ou conversas pessoais entre empreendedor e mentor – as incubadoras são fortemente baseadas no modelo tradicional de consultores, que são contratados para apoiar incubados com um preço descontado (pois irão atender um volume maior de empresas).',
                }],
                angle: 'fa fa-angle-right'
            },{
                question: 'As incubadoras financiam os empreendimentos? ',
                answer: 'Não. As incubadoras não são agentes financeiros, mas uma de suas principais funções é a pesquisa constante, o repasse de informações e a facilitação do acesso dos empresários a linhas de crédito. As incubadoras também facilitam os contatos dos empreendedores com parceiros que possam oferecer recursos, financiamento ou investimento.',
                angle: 'fa fa-angle-right'
            },{
                question: 'Para ser incubada a empresa têm que pagar algo? ',
                answer: 'Sim, para ter acesso aos benefícios oferecidos pela incubadora as empresas têm um pequeno custo fixo, abaixo dos aluguéis praticados no mercado.',
                angle: 'fa fa-angle-right'
            },{
                question: 'Como se sustenta a Incubadora do LNCC? ',
                answer: 'A Incubadora é mantida pelo LNCC que fornece o espaço físico, água, energia elétrica, café e paga os funcionários.',
                angle: 'fa fa-angle-right'
            },{
                question: 'Quem tem uma boa ideia, mas não tem dinheiro, pode participar? ',
                answer: 'Se alguém, um estudante por exemplo, é criativo, tem perfil empreendedor, mas não tem recursos econômicos para iniciar o seu empreendimento, a situação torna-se mais difícil. Mesmo assim, podem-se indicar alguns caminhos. O empreendedor pode:',
                angle: 'fa fa-angle-right'
            },{
                question: 'Quais as vantagens de ser uma empresa incubada? Por quê incubar uma empresa? ',
                answer: 'Os primeiros dois anos de funcionamento de uma pequena empresa são os mais críticos e com maiores probabilidades de insucesso. Para além de todo o apoio que a incubadora proporciona no início do projeto, fase mais difícil, as incubadoras de empresas têm preços competitivos, dão suporte à gestão e proporcionam a troca de experiência entre empreendedores Além dos espaços e serviços oferecidos, a própria concessão do sistema de incubação propicia o intercâmbio de ideias e tecnologias entre empresários incubados, que aprendem a importância de compartilhar o mesmo espaço, realizar parcerias e cultivar relacionamentos interpessoais de forma efetiva. Ter um projeto incubado significa ter um negócio com grande potencial de sucesso, que se desenvolve num ambiente propício para que se estabeleça fortalecido no mercado. A incubação de uma empresa permite ainda que esta se insira numa rede de contatos e conhecimentos da qual faz parte e dinamiza a incubadora.',
                angle: 'fa fa-angle-right'
            },{
                question: 'É preciso ter CNPJ para participar do processo seletivo? ',
                answer: 'Não. Aceitamos projetos de pessoas físicas.',
                angle: 'fa fa-angle-right'
            },{
                question: 'Por quanto tempo uma empresa pode ficar a incubadora? ',
                answer: 'Os contratos são de 4 anos podendo ser renovados por mais 2 anos.',
                angle: 'fa fa-angle-right'
            },{
                question: 'Somente alunos ou funcionários do LNCC podem concorrer a vaga? ',
                answer: 'Não. Qualquer pessoa pode se candidatar, o projeto apenas deve ter vinculo com a pesquisa desenvolvida em nosso laboratório',
                angle: 'fa fa-angle-right'
            },{
                question: 'Há possibilidsade de se instalar virtualmete? ',
                answer: 'Sim.',
                angle: 'fa fa-angle-right'
            },{
                question: 'Qual a diferença de empresa virtual para a empresa presencial? ',
                answer: 'A empresa possui os mesmos benefícios das demais , mas não utiliza o espaço físico da incubadora.',
                angle: 'fa fa-angle-right'
            }]
        }
    }
    render(){
        const {container} = this.state;
        return(
            <DefaultLayout title="Perguntas Frequentes">
                {container.map((item,key) =>
                    <div key={key} className="question">
                        {key + 1}. {item.question} <i className={item.angle}> </i>
                        <div className="answer">
                            {item.answer}
                            {item.orderedList && <ul>
                                {item.orderedList.map((orderedItem,orderedKey) =>
                                    <li key={orderedKey}>
                                        <b> {orderedKey + 1}. </b>{orderedItem.itemList}
                                    </li>
                                )} 
                            </ul>}
                        </div>
                    </div>
                )}
            </DefaultLayout>
        )
    }
}

export default FrequentQuestions