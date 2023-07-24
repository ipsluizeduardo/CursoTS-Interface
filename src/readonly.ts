interface ProdutoProps{
    readonly id: string;
    nome: string;
    descricao: string
}

let prduto1: ProdutoProps = {
    id: "1",
    nome:"tenis Nike",
    descricao: "top"
}

//Readonly nao deixa alterar a propriedade
// prduto1.id = "113234"

console.log(prduto1.id)