const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const hre = require("hardhat");
require("dotenv").config();

describe("Contract", function () {
  async function deployFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Contract = await hre.ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();

    await contract.waitForDeployment();

    return { contract, owner, otherAccount };
  }

  describe("Tests", function () {
    it("Should deploy", async function () {
      const { contract } = await loadFixture(deployFixture);

      expect(contract.target).to.be.a("string");
    });
  });
});
