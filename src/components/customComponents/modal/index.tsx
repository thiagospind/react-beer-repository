import React, { FC, ReactNode } from "react";
import "./modal.css"; // Arquivo para estilos básicos

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
          {children}
          <button className="modal-close" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
