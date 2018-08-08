import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';

const CommonModal = ({
                title,
                text,
                subtitle,
                children,
                closeModal,
                style = {},
                open = false,
              }) => (
  <Modal
    isOpen={open}
    onRequestClose={() => closeModal()}
    contentLabel="confirm"
    style={{
      overlay: {
        backgroundColor: 'rgba(230, 230, 230, 0.50)',
        zIndex: 2400,
      },
      content: {
        zIndex: 2401,
        maxWidth: '80%',
        marginLeft: '5%',
      },
    }}
  >
    <div><h3><a onClick={() => closeModal()}><span className="fa fa-arrow-left" style={{marginRight: 20}} /></a>{title}</h3></div>
    <div>
      <h1 className="no-margins">{text}</h1>
      <small>{subtitle}</small>
      {children}
    </div>
  </Modal>
);

const { string, node, bool, shape } = PropTypes;

CommonModal.propTypes = {
  title: string.isRequired,
  text: string,
  subtitle: string,
  children: node,
  style: shape(),
};

export default CommonModal;
