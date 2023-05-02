import React from "react";
import Modal from 'react-modal';
const bg = {
    overlay: {
      background: "rgba(32,34,43,0.85)"
    }
  };
const OptionModal = (props) => (
    <Modal
    className='prompt-box'
    isOpen={!!props.selected}
    contentLabel="Selected Options"
    onRequestClose={props.handleClose}//closes on escape key and click outside.
    closeTimeoutMS={200} 
    style={bg}
    >
        <h4 className="modal__title">I say</h4>
        <h2 className="modal__body">{props.selected}</h2>
        <button className="button" onClick={props.handleClose}>Okay</button>
    </Modal>
)
export default OptionModal;