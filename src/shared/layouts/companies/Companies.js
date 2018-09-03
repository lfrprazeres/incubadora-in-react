import React from 'react'
import {
    Image,
    ModalButton,
    Modal
} from '../../components'
import './Companies.css'


const Companies = ({image,paragraph,partner,className,contact,open,toOpen,toClose}) => (
    <div className={className}>
        <ModalButton 
        open={open}
        openModal={
            <Image source={image}/>
        }
        toOpen={toOpen}
        />
        <Modal className={open ? "modal-content modalOpen" : "modal-content modalClosed"}>
                <span className="toClose" toClose={toClose} />
                <div>
                    {paragraph}
                </div>
                <div>
                    <b> Sócios:  </b>
                    {partner}
                </div>
                <div>
                    <b> Contatos: </b>
                    {contact}
                </div>
        </Modal>
    </div>
)
export default Companies