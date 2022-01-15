const copiaReversoVerboso = (list) => {
  const newArray = new Array(list.length);
  for (let i = 0; i < list.length; i++) {
    newArray[i] = list[list.length - 1 - i];
  }
  return newArray;
};

const copiaReverso = (list) => {
  list.map((element, index) => list[list.length - 1 - index]);
};

const findAll = (list, item) => {
  const found = [];
  list.forEach((element, index) => {
    if (element == item) {
      found.push(index);
    }
  });
  return found;
};
