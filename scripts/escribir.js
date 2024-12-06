
async function main() {
	const greeterAddress = "0xA16F2753938150610A1C1eAb308802bFA14B440E"
	const Greeter = await ethers.getContractFactory("Greeter");
	const greeter = Greeter.attach(greeterAddress);
	const tx = await greeter.setGreeting("Adios mundo cruel!");
	await tx.wait();
}
main();