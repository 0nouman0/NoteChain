import React from 'react';
import { Wallet } from 'lucide-react';
import { useTonConnect } from '../hooks/UseTonConnect';

interface ConnectWalletProps {
  onOpenModal: () => void;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ onOpenModal }) => {
  const { isConnected, disconnect } = useTonConnect();

  const handleClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      onOpenModal();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
    >
      <Wallet className="w-5 h-5 mr-2" />
      {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
    </button>
  );
};

export default ConnectWallet;