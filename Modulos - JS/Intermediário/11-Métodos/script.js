let usuario = {
    nome: 'roberto',
    excluir: () => {
        console.log(`O Usuário, ${this.nome} foi excluído`);
    }
}

usuario.excluir();