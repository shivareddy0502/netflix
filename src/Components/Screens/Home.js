import React from 'react';
import Nav from "../Nav";
import "../../Css/Screens/home.sass";
import Banner from "../Banner";
import Row from '../Row';
import MoreInfo from '../MoreInfo';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const customStyles = {
    content: {
      padding: '0',
      margin: 'auto',
      border: '0',
      borderRadius: '10px',
      inset: '70px 0 0 0',
      width: '850px',
    },
  };

export default function Home() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const  openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div className="homescreen">
            <Nav />
            <Banner type="movies" openModal={openModal}/>
            <Row openModal={openModal}/>
            <Row openModal={openModal}/>
            <Row openModal={openModal}/>
            <Row openModal={openModal}/>
            <Row openModal={openModal}/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <MoreInfo modalClose={closeModal}/>
            </Modal>
        </div>
    )
}
