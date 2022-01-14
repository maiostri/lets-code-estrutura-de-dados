const optionText = " Cadastro básico de heróis - Marvel \n " +
" 1. Adicione um heroi novo \n "+
" 2. Liste os herois \n " +
" 3. Remova um heroi \n " +
" 4. Remova o ultimo heroi \n "+
" 5. Listar com índice \n"+
" 6. Sair";


let option = 0;

const heroesList = new Array();

while (option != 5) {
    let optionString = prompt(optionText);
    option = Number(optionString);
    // O switch é uma forma de fazer vários ifs de uma maneira mais elegante.
    switch (option) {
        // Inserir o herói
        // O JS ele faz igualdade de tipo (operador: ===)
        case 1: 
            const name = prompt("Insira o nome do herói: ");
            heroesList.push(name);
            break;
        // Listar os herois
        case 2: 
            window.alert(`Nome dos heróis: ${heroesList.join(",")}`);
            break;
        case 3:
            const nome = prompt("Insira o nome do herói a ser removido: ");
            const index = heroesList.indexOf(nome);
            if (index > -1) {
                heroesList.splice(index, 1);
            }
            else {
                alert("Heroi não encontrado!!!");
            }
            break;
        case 4:
            const removedHero = heroesList.pop();
            alert(`O herói ${removedHero} foi removido com sucesso!`);
            break;
        case 5:
            const heroesWithIndex = heroesList.map((hero, index) => `${hero} (${index})`);
            alert(`Lista de herois com indice: ${heroesWithIndex.join(',')}`);
        case 6:
        default:
            throw new Error("Fechado");
    }

    // optionString = prompt(optionText);
    // option = Number(optionString);
}



