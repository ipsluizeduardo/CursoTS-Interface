
interface CursoProps {
    id: string;
    nome: string;
    preco: number;

    promocao: (preco: number) => void;
}

// function mostraPromocao(preco: number): void {
//     console.log(`Promoção no curso por apenas: R$ ${preco}`);
// }

// const novoCurso: CursoProps = {
//     id: "1",
//     nome: "Curso TS",
//     preco: 750,
//     promocao: (preco: number): void => {
//         console.log('PREÇO TOTAL: ', preco)
//     }
// }

// console.log(novoCurso);

// console.log(novoCurso.promocao(350))

interface SomaProps{
    (valo1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
    console.log('Resultado: ', valor1+valor2);

    return valor1+valor2;
}

const resultado = somaNumeros(15,20)

console.log('Resultado da variavel: ', resultado)

