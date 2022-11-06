import React from 'react';
import ReactDOM from 'react-dom';
import Modal, { setAppElement } from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement("#root")

function Popup(props){
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return(
        <div>
            <button onClick={openModal}>POST</button>
            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                {props.children}
            </Modal>
        </div>
    )
}

export default Popup;