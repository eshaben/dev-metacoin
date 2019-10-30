const ConvertLib = artifacts.require("ConvertLib");
const MetaCoinSmallBalance = artifacts.require("MetaCoinSmallBalance");

module.exports = function(deployer) {
  deployer.link(ConvertLib, MetaCoinSmallBalance);
  deployer.deploy(MetaCoinSmallBalance);
};
