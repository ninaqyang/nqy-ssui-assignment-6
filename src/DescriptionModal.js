import React, { Component } from 'react';
import './DescriptionModal.css';

import closeIcon from './icons/close.png';
import stampIcon from './icons/stamp.png';

class DescriptionModal extends Component {
  render() {
    const {
      onClose,
      title,
      description,
      address
    } = this.props;

    return (
      <div className="modalOverlay">
        <div className="modal">
          <div className="modalContent">
            <div className="leftContainer">
              <div className="closeButton" onClick={onClose}>
                <img className="closeIcon" src={closeIcon} alt="Close" />
              </div>
              <div className="textContentLeft">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
              </div>
            </div>
            <div className="centerLine"></div>
            <div className="rightContainer">
              <img className="stampIcon" src={stampIcon} alt="Stamp" />
              <div className="textContentRight">
                <div className="address1">{address[0]}</div>
                <div className="address2">{address[1]}</div>
                <div className="address3">{address[2]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DescriptionModal;
