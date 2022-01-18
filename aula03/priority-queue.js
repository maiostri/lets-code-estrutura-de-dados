class Elemento {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}


const createPriorityQueue = () => {
    let list = [];

    return {
        // Adiciono no final
        add: (value, priority) => {

            let contain = false;

            const elemento = new Elemento(value, priority);

            for (let i = 0; i < list.length; i++) {
                // Cheguei uma posição mais prioritária que o elemento que estou inserindo.
                if (list[i].priority > elemento.priority) {
                    // Estou colocando o elemento na posição i sem tirar o item original
                    list.splice(i, 0, elemento);
                    contain = true;
                    break;
                }
            }

            // O elemento que eu quero tem a maior prioridade
            if (!contain) {
                list.push(elemento);
            }
        },

        remove: () => {
            if (list.length > 0) {
                return list.pop();
            }
        }
    }
}

const nossaFila = createPriorityQueue();
nossaFila.add("elemento 1", 1000);
nossaFila.add("elemento 3", 10);
nossaFila.add("elemento 2", 100);

console.log(nossaFila.remove()); // 1000
console.log(nossaFila.remove()); // 100
console.log(nossaFila.remove()); // 10