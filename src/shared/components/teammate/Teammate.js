import React from 'react'
import {
    Image
} from '../'

import './Teammate.css'

class Teammate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            teammate: [{
                image: 'flavio.jpg',
                name: 'Flávio Barbosa Toledo',
                office: 'Gerente',
                mail: 'fbtoledo@lncc.br',
                lattes: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4786195E5'
            },{
                image: 'ana.jpg',
                name: 'Ana Claudia Perigolo moura',
                office: 'Secretária',
                mail: 'acpmoura@lncc.br',
                lattes: false
            },{
                image: 'marcelo.jpg',
                name: 'Marcelo Mendes da Fonseca',
                office: 'Analista de CT',
                mail: 'marcelof@lncc.br',
                lattes: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4200556E6'
            },{
                image: 'LF.jpg',
                name: 'Luiz Fernando Ribeiro dos Prazeres',
                office: 'Estagiário',
                mail: 'lfernando@lncc.br',
                lattes: false
            }]
        }
    }
    render(){
        const {teammate} = this.state;
        return(
            <div className="teammateContainer"> 
                {teammate.map((item,key) =>
                    <div className="teammate" key={key}>
                        <div className="teammate-image">
                            <Image source={item.image} />
                        </div>
                        <div className="teammate-content">
                            <b> {item.name} </b>
                            <p> {item.office} </p>
                            <div className="teammate-mail">
                                <div>
                                    <Image source="mail-team.png" />
                                </div>
                                <p> {item.mail} </p>
                            </div>
                            {item.lattes && <div className="teammate-lattes">
                                <a href={item.lattes} target="_blank"><Image source="resume-team.png" />CV Lattes</a>
                            </div>}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Teammate