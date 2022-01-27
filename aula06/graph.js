class Graph {

    // Nosso grafo é um grafo sem peso
    // Não vamos ter ciclos.
    // Pode ser bi-direcional.

    constructor() {
        this.adjList = new Map();
    }

    // addVertex -> adiciona o vertice
    // vertice nosso é um numero.
    addVertex(vertice) {
        this.adjList.set(vertice, []);
    }

    // addEdge -> adiciona a aresta
    // origem e destino são outros vertices.
    addEdge(origem, destino) {
        // Adiciono o caminho para o destino.
        this.adjList.get(origem).push(destino);
    }

    printGraph() {
        // Pegar todos vertices
        const vertices = this.adjList.keys();

        // Iterar sobre os vertices
        for (let vertice of vertices) {
            //
            const arestas = this.adjList.get(vertice);

            for (let aresta of arestas) {
                console.log(`${vertice}---->${aresta}`);
            }
        }
    }

    bfs(noInicial) {
        let visitados = new Map();

        let fila = new Array();
        visitados.set(Number(noInicial), true);
        fila.unshift(noInicial);

        while (fila.length != 0) {
            const elementoDaFila = fila.pop();
            console.log(`Número: ${elementoDaFila}`);
            const vizinhos = this.adjList.get(Number(elementoDaFila));
            for(let index in vizinhos) {
                const vizinho = vizinhos[index];
                if (visitados.get(Number(vizinho)) != true) {
                    visitados.set(Number(vizinho), true);
                    fila.unshift(vizinho);
                }
            }
        }
    }
}

const meuGrafo = new Graph();
meuGrafo.addVertex(0);
meuGrafo.addVertex(1);
meuGrafo.addVertex(2);
meuGrafo.addVertex(3);
meuGrafo.addVertex(4);
meuGrafo.addVertex(5);
meuGrafo.addVertex(6);

meuGrafo.addEdge(0, 1);
meuGrafo.addEdge(0, 2);
meuGrafo.addEdge(1, 3);
meuGrafo.addEdge(1, 4);
meuGrafo.addEdge(2, 5);
meuGrafo.addEdge(2, 6);

meuGrafo.bfs(0);



