class Node {
    constructor(key) {
        this.key = key // chave
        this.left = null // ponteiro do elemento a esquerda
        this.right = null // ponteiro do elemento da direita
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null
    }

    //  no nó atual
    // analizar se o valor é menor que o no atual
    // se não existoir esquerda inserir o nó 
    // vai pra esquerda // vai pra direta
    

    insert(key){
        if(this.root == null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }

    insertNode(node, key){
        if(key < node.key){
            if(node.left == null) {
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if(node.right == null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }

    caminhadaPreOrder(){
        this.caminhadaPreOrderNo(this.root)
    }

        
    //  verificar se o nó é nulo
    // se não for imprimir a key
    // vai pra esquerda
    // vai pra direita
    
     //15 -> 10 -> 3
    caminhadaPreOrderNo(node){
        if(node != null){
            this.caminhadaPreOrderNo(node.left)
            this.caminhadaPreOrderNo(node.right)
            console.log(node.key)
        }
    }
}

//15 - 10 - 3 -12 - 20
//3 - 10 - 12 -15 - 20
//3 - 12 - 10 - 20 - 10

var tree = new BinarySearchTree()

tree.insert(15)
tree.insert(10)
tree.insert(20)
tree.insert(3)
tree.insert(12)
