
type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

const produtoInfo: Info = {
    id: 123,
    nome: "Placa de video",
}

type Categoria = {
    slug: string;
    quantidadeProduto: number
}

const categotia1: Categoria = {
    slug: "hardware",
    quantidadeProduto: 2
}

type ProdutoInfo = Info & Categoria; //ProdutoInfo é a intercessao (UNIAO) entre info e categoria

const novoProduto: ProdutoInfo = {
    id: 234531,
    nome: "Teclado",
    slug: "Mecanico",
    quantidadeProduto: 2
}

console.log(novoProduto)