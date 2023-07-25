type Uuid = number | string | null;

function acessar(uuid: Uuid, nome: string) {
    console.log(`ID ${uuid} - Bem vindo ${nome}`)
}

function LogUsuario(uuid: Uuid) {
    console.log(`Conta referente ao UUID ${uuid}`)
}

// acessar(123, "Luiz")
// LogUsuario("55")

type Moedas = "BRL" | "EUR" | "BTC";

function comprarItem(moeda: Moedas) {
    console.log("Comprando com a moeda: ", moeda)
}

comprarItem("BRL")