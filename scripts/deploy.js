// imports
require("@nomicfoundation/hardhat-toolbox")

const { ethers, run, network } = require("hardhat")

// async main
// npx hardhat run scripts/deploy.js --network   hardhat           sepolia
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    const simpleStorage = await SimpleStorageFactory.deploy()
    console.log("deploing contract...")
    await simpleStorage.waitForDeployment()
    console.log(`Deployed contract to: ${simpleStorage.target}`)
    // Check RPC
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.waitForDeployment(2)
        await verify(simpleStorage.address, [])
    }
    const currentValue = await simpleStorage.retrieve()
    console.log(`Curren Value is: ${currentValue}`)

    // Update the current Value
    const txTesponse = await simpleStorage.store(7)
    await txTesponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Update Value is : ${updatedValue}`)
}

//  npx hardhat verify --show-stack-traces
async function verify(contractAddress, args) {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("alredy verified")) {
            console.log("Already ferified!")
        } else {
            console.log(e)
        }
    }
}

// mian
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
