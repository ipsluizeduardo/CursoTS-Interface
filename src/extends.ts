// Vamos supor que temos um jogo e esse jogo pode ter uma DLC.

interface JogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const left4dead: JogoProps = {
    id: "123",
    nome: "Left 4 Dead 2",
    descricao: "Jogo de açao e tiro",
    plataforma: ["PS5", "PC"]
}

// interface DLC extends JogoProps {
//     novoConteudo: string [];
// }

// const left4DeadDLC: DLC = {
//     id: "30",
//     nome: "Left 4 Dead 2 - Novos Mapas",
//     descricao: "4 mapas",
//     plataforma: ["PS5", "PC"],
//     novoConteudo: ["mod", "armas"]
// }

// console.log(left4DeadDLC);

interface DLC extends JogoProps {
    jogoOriginal: JogoProps;
    novoConteudo: string [];
}

const left4DeadDLC: DLC = {
    id: "30",
    nome: "Left 4 Dead 2 - Novos Mapas",
    descricao: "4 mapas",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["mod", "armas"],
    jogoOriginal: left4dead
}

console.log(left4DeadDLC);

