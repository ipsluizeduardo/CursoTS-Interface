interface CadastroProps {
    nome: string;
    email: string;
    status?: boolean
};

const novoUsuario: CadastroProps = {
    nome: "dudu",
    email: "hshsh.com"
}

// console.log(novoUsuario);

function novoUser(usuario: CadastroProps) {
    console.log(usuario.email)
}

novoUser({nome: "dudu",email: "hhaha.com"})