
// ES2019
// ES6
// EcmaScript
// Draft, Testing, Release Candidate, final.

// ES2021


const createStack = () => {

    let list = [];

    return {
        add: value => {
            list = [value, ...list];
        },

        remove: () => {
            // ES6 -> descontruct
            const [head, ...tail] = list; 
            list = tail;
            return head;
        },

        length: () => {
            return list.length;
        }
    }
}

// Ao encontrar um parenteses aberto, a gente adiciona na pilha
// Ao encontrar um parenteses fechado, a gente remove da pilha
// No final, se ainda existir algum elemento na pilha, significa que os parenteses estao incorretos
// (( )) => ok!
// (())) => false(não conseguimos realizar uma operação de retirada)


const verificaParenteses = (palavra) => {
    const pilha = createStack();

    for (let i = 0; i < palavra.length; i++) {
        const letra = palavra.charAt(i);
        if (letra == '(') {
            pilha.add('(');
        } else if (letra == ')') {
            // Tem mais fechamentos que aberturas.
            if (pilha.length() === 0) {
                return false;
            }
            pilha.remove();
        }
    }
    return pilha.length() === 0;
}


console.log("(()) Resultado: "+ verificaParenteses("(())"));
console.log(")() Resultado: "+ verificaParenteses(")()"));
console.log("()() Resultado: "+ verificaParenteses("()()"));
console.log("(() Resultado: "+ verificaParenteses("(()"));