import { useTonConnectUI } from '@tonconnect/ui-react';
import { useCallback } from 'react';

export const useTonConnect = () => {
  const [tonConnectUI] = useTonConnectUI();

  const wallet = tonConnectUI.wallet;
  
  const connect = useCallback(async () => {
    await tonConnectUI.connectWallet();
  }, [tonConnectUI]);

  const disconnect = useCallback(async () => {
    await tonConnectUI.disconnect();
  }, [tonConnectUI]);

  return {
    wallet,
    connect,
    disconnect,
    isConnected: wallet !== null,
    address: wallet?.account.address,
    network: wallet?.account.chain,
  };
};