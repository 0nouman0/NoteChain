import React, { useEffect } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '../hooks/UseTonConnect';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { isConnected, address } = useTonConnect();

  // Close modal automatically when wallet is connected
  useEffect(() => {
    if (isConnected) {
      onClose();
    }
  }, [isConnected, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-50 bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Connect your TON Wallet
          </h3>
          <p className="text-gray-600 mb-6">
            Choose your preferred wallet to connect to our platform
          </p>
          <div className="flex justify-center">
            <TonConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;