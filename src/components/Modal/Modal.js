import React from "react";
import propTypes from "prop-types";

import "./Modal.css";

const Modal = ({ info: { title, mainInfo }, modalTarget }) => {
  return (
    <div id="modal">
      <div className=" modalDialog slideDownIn">
        <div className="modalContent">
          <h3>{title}</h3>
          <div
            className="mainInfo"
            dangerouslySetInnerHTML={{ __html: mainInfo }}
          />
          <div className="btn" onClick={modalTarget}>
            Закрыть
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  info: propTypes.object.isRequired,
  title: propTypes.string.isRequired,
  mainInfo: propTypes.string.isRequired,
  modalTarget: propTypes.func.isRequired,
};

export default Modal;
