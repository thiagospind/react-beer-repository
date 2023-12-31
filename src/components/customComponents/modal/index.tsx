import React, { FC, ReactNode } from "react";
import "./modal.css"; // Arquivo para estilos básicos
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="flex justify-end">
            <button onClick={onClose}>
              <IoCloseSharp size={20} />
            </button>
          </div>
          {children}
          {/* <button className="modal-close" onClick={onClose}>
            Fechar
          </button> */}
        </div>
      </div>
    </div>
  );
};
