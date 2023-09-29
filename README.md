# Hardhat Simple Storage Practice

Small Hardhat learning project for compiling, testing, and deploying Solidity contracts.

The project keeps the original course-practice structure and uses environment variables for network and verification settings.

## Setup

```bash
npm install
```

Create a local `.env` file only on your own machine:

```text
SEPOLIA_RPC_URL=your_rpc_url
PRIVATE_KEY=your_private_key
ETHERSCAN_API_KEY=your_etherscan_key
NODE_URL=http://127.0.0.1:8545
NODE_PRIVATE_KEY=your_local_node_private_key
```

Do not commit `.env` files or private keys.

## Common Commands

```bash
npx hardhat compile
npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
npx hardhat run deploy.js --network sepolia
```

## Status

Early Solidity/Hardhat learning project, refreshed in 2026 with clearer documentation and security notes. It is not production smart-contract infrastructure.

## Security Notes

- No private key values are committed.
- Network secrets are read from environment variables.
- Use test wallets and test networks for experiments.
