import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css'
const Modal = (props) => {
    return (  
        <>
        <Backdrop show={props.show} clicked={ props.modalClosed}/>
        <div className='Modal'
              style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-10)',
                opacity: props.show ? '1' : '0',
                zIndex: props.show ? '999' : '-100',
            }}>
        {props.children}
        </div>
        </>
    );
}
 
export default Modal;