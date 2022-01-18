class Node {
    constructor(element) {
        this.element = element;
        // Vai ser o ponteiro para o próximo elemento.
        this.next = null;
    }
}

// Uma LinkedList é composta 0-N Nós.

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add (element) {
        const node = new Node(element);
        let atual;

        // Se a lista estiver vazia, vamos colocar o nó como cabeça da lista
        if (this.head == null) {
            this.head = node;
        }
        // A lista não está vazia.
        else {
            atual = this.head;

            // Enquanto tiver next, pule para a proxima posição.
            while (atual.next) {
                atual = atual.next;
            }

            // Adicionar o nó no final, dado que o 'atual' é o ultimo elemento da lista.
            atual.next = node;
        }
        this.size++;
    }

    // array[0] =
    insertAt(element, index) {
        // Index é < 0 ou o index é maior que o tamanho do array
        if (index < 0 || index > this.size) {
            throw new Error("Index inválido");
        }
        // Passou indices validos
        else {
            const node = new Node(element);
            let atual = this.head;
            let anterior;

            // Passou indice 0
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            }
            // Não estou inserindo no inicio
            else {
                // Vamos controlar o contador na mao
                let contador = 0;

                while (contador < index) {
                    contador++;
                    anterior = atual;
                    atual = atual.next;
                }

                // Vai estar no index correto!
                // Só adicionar
                node.next = atual;
                anterior.next = node;
            }


        }
        this.size++;

    }

}