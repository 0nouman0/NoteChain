const TonWeb = require('tonweb'); // Import TON Web library
const { toNano } = TonWeb.utils; // Utility functions for TON

// Replace with your contract's address and wallet private key
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address
const walletPrivateKey = 'YOUR_WALLET_PRIVATE_KEY'; // Replace with your wallet private key

async function main() {
    const tonweb = new TonWeb(new TonWeb.HttpProvider('https://testnet.toncenter.com/api/v2/jsonRPC')); // Connect to TON testnet

    // Create a wallet instance
    const wallet = tonweb.wallet.create({ publicKey: walletPrivateKey });

    // Function to add to the counter
    async function addToCounter(amount: number) {
        const msg = {
            amount: amount,
        };

        const result = await wallet.sendMessage({
            to: contractAddress,
            value: toNano('0.1'), // Amount of TON to send (optional)
            body: msg,
        });
        console.log(`Added ${amount} to counter. Transaction result:`, result);
    }

    // Function to set the public address
    async function setPublicAddress(publicAddress: bigint) {
        const result = await wallet.sendMessage({
            to: contractAddress,
            value: toNano('0.1'), // Amount of TON to send (optional)
            body: publicAddress,
        });
        console.log(`Set public address to ${publicAddress}. Transaction result:`, result);
    }

    // Example usage
    await addToCounter(5); // Add 5 to the counter
    await setPublicAddress(12345678901234567890n); // Set public address (use a valid address)
}

// Run the main function and handle errors
main().catch(error => {
    console.error('Error interacting with the contract:', error);
});