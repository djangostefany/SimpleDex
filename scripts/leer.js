
async function main() {
	const greeterAddress = "0x96bF8fc148af0fc5567976624AF14f9D8e74ddb2"
	const Greeter = await ethers.getContractFactory("Greeter");
	const greetera = Greeter.attach(greeterAddress);
	const greeting = await greetera.greet();
	console.log(greeting);
}
main();