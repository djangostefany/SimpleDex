// la dirección de Sepolia Greeter o la saco de 
// arriba del contrato verificado
// greeterAbi también lo saco del contrato verificado
// contract ABI
const greeterAddress = "0xA16F2753938150610A1C1eAb308802bFA14B440E"
const greeterAbi = [{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"}]
let signer;
let greeterContract;

async function conectar() {
    alert("Estoy conectando");
    if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        const address = await signer.getAddress();
        greeterContract = new ethers.Contract(greeterAddress, greeterAbi, signer);
        document.getElementById("accountAddress").innerText = `Conectado: ${address}`;  
    } else {
        alert('MetaMask no está instaldo');
    }
}

async function leer() {
    alert("estoy en función leer");    
    const greeting = await greeterContract.greet();
    document.getElementById("greeting").innerText = greeting;
}

async function Escribir() {
    let value2Change = document.getElementById("value2change").value;
    alert(value2Change); 
    const tx = await greeterContract.setGreeting(value2Change);
    await tx.wait();
}

