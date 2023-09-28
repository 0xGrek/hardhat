const { task } = require("hardhat/config")

// npx hardhat block-number --network hardhat

task("block-number", "Prints the current block").setAction(
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Block number ${blockNumber}`)
    }
)
