// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTCollection is Ownable,ERC721Enumerable{
    string baseTokenURI;
    bool paused;
    uint256 public maxTokenIds = 10;
    uint256 public _price = 0.01 ether;


    // total number of tokenIds minted
    uint256 public tokenIds;
    modifier onlyWhenNotPaused(){
        require(!paused,"Contract is under Construction");
        _;
    }

    constructor(string memory _baseTokenURI) ERC721("LBChain3","LBC3"){
        baseTokenURI = _baseTokenURI;
    }

    function mint()public payable onlyWhenNotPaused {
        require(tokenIds<maxTokenIds,"Out of Stock");
        require(msg.value >= _price, "Ether sent is not correct");
        tokenIds++;
         _safeMint(msg.sender, tokenIds);
    }
    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }
     function setPaused() public onlyOwner {
        paused = !paused;
    }
       function withdraw() public onlyOwner  {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) =  _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

        // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

}