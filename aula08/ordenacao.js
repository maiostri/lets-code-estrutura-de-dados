// Queremos fazer uma função chamada sort()
// Que vai receber um array e devolver o array ordenado.

// [3, 8, 16, 7, 17, 2, 55, 21, 10, 35, 1, 90]
// [1]
// [3, 8, 16, 7, 17, , 55, 21, 10, 35, 90] ]
// [1, 2]

// [8, 3]
// [3]
// [8]

const teste = new Array(2, 8, 16, 7, 17, 4, 55, 21, 10, 35, 11, 90);

const sortQueFunciona = (array) => {
  const arrayOrdenado = new Array();

  while (array.length != 1) {
    let menor = array[0];
    let index = 0;
    // O(N) -> N => O(N^2)
    for (let i = 1; i < array.length; i++) {
      if (menor > array[i]) {
        menor = array[i];
        index = i;
      }
    }
    // O(2N)
    array.splice(index, 1); // O(N)
    arrayOrdenado.push(menor);
  }
  arrayOrdenado.push(array[0]);

  return arrayOrdenado;
};

const partition = (array, start, end) => {
  const pivotValue = array[start];
  let pivotIndex = start +1;


  // Vou trocando as posições
  for (let i = pivotIndex; i <= end; i++) {
    if (pivotValue > array[i]) {
      const temporaria = array[i];
      array[i] = array[pivotIndex];
      array[pivotIndex] = temporaria;
      console.log(`Troquei ${temporaria} por ${array[i]}`);
      pivotIndex++;
    }
  }

  const temporaria = array[start];
  array[start] = array[pivotIndex-1];
  array[pivotIndex-1] = temporaria;
  return pivotIndex -1;
};

const quickSort = (array, start, end) => {
  if (start >= end) {
    return;
  }

  let index = partition(array, start, end);
  //

  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);
};

const nossoArray = [51, 95, 66, 72, 42, 38, 39, 41, 15];
quickSort(nossoArray, 0, nossoArray.length-1);
console.log(nossoArray);
