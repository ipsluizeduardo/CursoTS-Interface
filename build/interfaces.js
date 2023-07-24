"use strict";
;
const BurgerK = {
    nome: "Burger K",
    endereco: "Rua ali",
    status: true
};
// console.log(BurgerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja ${endereco}`);
    console.log(`Status da loja ${status}`);
}
novaLoja({ nome: "Redb", endereco: "Ali", status: true });
