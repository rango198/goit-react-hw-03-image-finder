import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Close, ModalWindow, Overlay } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');
export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ currentTarget, target, code }) => {
    if (currentTarget === target || code === 'Escape') {
      this.props.close();
    }
  };
  render() {
    const { closeModal } = this;
    const { children, close } = this.props;

    return createPortal(
      <Overlay onClick={closeModal}>
        <ModalWindow>
          <Close onClick={close}>X</Close>
          {children}
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
