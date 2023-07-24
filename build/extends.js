"use strict";
// Vamos supor que temos um jogo e esse jogo pode ter uma DLC.
const left4dead = {
    id: "123",
    nome: "Left 4 Dead 2",
    descricao: "Jogo de açao e tiro",
    plataforma: ["PS5", "PC"]
};
const left4DeadDLC = {
    id: "30",
    nome: "Left 4 Dead 2 - Novos Mapas",
    descricao: "4 mapas",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["mod", "armas"],
    jogoOriginal: left4dead
};
console.log(left4DeadDLC);
