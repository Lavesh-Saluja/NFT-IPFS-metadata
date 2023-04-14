// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const metadataURL = "ipfs://QmRFdctFnQt1CvDXD3vcioKQmLeDNDjmYgQnnT7MZzConW/";



  const NFTColection = await hre.ethers.getContractFactory("NFTCollection");
  const nft = await NFTColection.deploy(metadataURL);

  await nft.deployed();//0xE8De5B77CaEaB882b8252edb83D5390B5f022777

  console.log(
    `${nft.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
