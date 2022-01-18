const createQueue = () => {
    let list = [];

    return {
        // Adiciono no final
        add: value => {
            // list.push()
            list = [...list, value] // retorno void
        },

        remove: () => {
            if (list.length > 0) {
                const [head, ...tail] = list;
                list = tail;
                return head;
            }
        }
    }
}

const minhaFila = createQueue();
minhaFila.add("1");
minhaFila.add("2");
minhaFila.add("3");

console.log(minhaFila.remove());
console.log(minhaFila.remove());
console.log(minhaFila.remove());




