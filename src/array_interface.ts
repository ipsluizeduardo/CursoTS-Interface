// interface TecnoliaProps {
//     id: string;
//     nome: string;
//     slug: string[];
// }

// let tecnologia1: TecnoliaProps = {
//     id: "1",
//     nome: "PHP",
//     slug: ["php", "JS"]
// }

interface TecnoliaProps {
    id: string;
    nome: string;
    descricao?: string;
}

interface NomesProps {
    tecnologia: TecnoliaProps[]
}

let frontend: NomesProps = {
    tecnologia: [
        {id: "12", nome: "ReactJS", descricao: "Biblioteca"},
        {id: "22", nome: "VueJs"},

    ]
}

console.log(frontend.tecnologia)