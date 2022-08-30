const { run } = require("hardhat"); //cuz we are using run fucntion in line 5

const verify = async (contractAddress, args) => {
  console.log("Verifying Contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    // says if this message is already veerified then we can continue
    if (e.message.toLowerCase().includes("already verfied")) {
    } else {
      console.log(e);
    }
  }
};

module.exports = { verify };
