import React from "react";
import "./Modal.css";

export default function Modal({ children, handleClose }) {
  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal">
          {children}
          <button className="btn" onClick={handleClose}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}
