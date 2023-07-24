interface LojaProps {
    nome: string;
    endereco: string;
    status: boolean
};

const BurgerK: LojaProps = {
    nome: "Burger K",
    endereco: "Rua ali",
    status: true
}

// console.log(BurgerK);

function novaLoja({ nome, endereco, status}: LojaProps): void {
    console.log(`Loja ${nome} criada com sucesso!`)
    console.log(`Endereço da loja ${endereco}`)
    console.log(`Status da loja ${status}`)
}

novaLoja({nome: "Redb", endereco: "Ali", status: true})