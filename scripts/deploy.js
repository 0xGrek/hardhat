// imports
require("@nomicfoundation/hardhat-toolbox")

const { ethers } = require("hardhat")

// async main  npx hardhat run scripts/deploy.js
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("deploing contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.waitForDeployment()
    console.log(simpleStorage)
}

// mian
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
