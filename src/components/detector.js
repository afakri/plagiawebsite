class CustomIterator {
  constructor(size) {
    this.cursor = 0;
    this.range = size;
  }
  //length of text is the argument
  hasNext(length) {
    return this.cursor + this.range <= length;
  }
  next(text) {
    let temp = this.cursor;
    this.cursor++;
    return text.substring(temp, temp + this.range);
  }
}

function setMap(string) {
  let hashmap = new Map();
  let iterator = new CustomIterator(3);
  while (iterator.hasNext(string.length)) {
    let next = iterator.next(string);
    let value = hashmap.get(next);
    if (hashmap.has(next)) {
      hashmap.set(next, value + 1);
    } else {
      hashmap.set(next, 1);
    }
  }
  return hashmap;
}

export function detector(string, string2) {
  var hashmap = setMap(string);
  var hashmap2 = setMap(string2);

  var intersection = 0;
  var arr = Array.from(hashmap.keys());
  arr.forEach((element) => {
    if (hashmap2.has(element)) {
      intersection++;
    }
  });
  if (intersection == 0) {
    var union = hashmap.size + hashmap2.size;
  } else {
    var union = hashmap.size + hashmap2.size - intersection;
  }
  return (intersection / union) * 100;
}
