// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const metadataURL = "https://ipfs.io/ipfs/QmRFdctFnQt1CvDXD3vcioKQmLeDNDjmYgQnnT7MZzConW/";



  const NFTColection = await hre.ethers.getContractFactory("NFTCollection");
  const nft = await NFTColection.deploy(metadataURL);

  await nft.deployed();//0x29438eE1D941413Fcdf57241703c16Fc6c609199

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
