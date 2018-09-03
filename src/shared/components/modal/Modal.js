import React from 'react'

class Modal extends React.Component{
    render(){
        const {children,className} = this.props
        return(
            <div className={className}>
                <div className="modal-overlayer">
                    {children}
                </div>
            </div>
        )
    }
}

export default Modal