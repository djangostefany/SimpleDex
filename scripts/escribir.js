
async function main() {
	const greeterAddress = "0x96bF8fc148af0fc5567976624AF14f9D8e74ddb2"
	const Greeter = await ethers.getContractFactory("Greeter");
	const greeter = Greeter.attach(greeterAddress);
	const tx = await greeter.setGreeting("Adios mundo cruel!");
	await tx.wait();
}
main();