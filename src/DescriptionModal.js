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
              <p className="title">{title}</p>
              <p className="description">{description}</p>
            </div>
            <div className="rightContainer">
              <img className="stampIcon" src={stampIcon} alt="Stamp" />
              <p className="address">{address}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DescriptionModal;
