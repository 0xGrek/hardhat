const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// npx hardhat test

describe("SimpleStorage", () => {
    let SimpleStorageFactory, simpleStorage

    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await SimpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async () => {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        //  expect, assert
        assert.equal(currentValue.toString(), expectedValue)
        // the same
        // expect(currentValue.toString()).to.equal(expectedValue)
    })
    // it.only
    it("Should update when we call store", async () => {
        const expectedValue = "8"
        const txResponse = await simpleStorage.store(expectedValue)
        await txResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
})
