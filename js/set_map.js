const map = new Map();

map.set("name", "vitalii");

const objKey = { surname: "shaiuk" };
map.set(objKey, "developer");

console.log(map.get("name"));
console.log(map.get(objKey));

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(3);
set.add(4);

console.log(set);
