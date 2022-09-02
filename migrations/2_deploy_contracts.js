const Token = artifacts.require("Token");
const YSwap = artifacts.require("YSwap");

module.exports = async function(deployer) {
  // Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed()

  // Deploy YSwap
  await deployer.deploy(YSwap, token.address);
  const ySwap = await YSwap.deployed()

  // Transfer all tokens to YSwap (1 million)
  await token.transfer(ySwap.address, '1000000000000000000000000')
};
