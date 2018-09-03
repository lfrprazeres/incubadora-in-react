import React from 'react'
import './Modal.css'

class ModalButton extends React.Component{
    render(){
        const {openModal,toOpen} = this.props
        return(
            <button onClick={toOpen} className="modal-button">
                {openModal}
            </button>
        )
    }
}

export default ModalButton