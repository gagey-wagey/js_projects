var multTable = [];
for (var v = 0; v < 10; v++) {
    multTable.push([]);
    for (var i = 0; i < 10; i++) {
        multTable[v].push(i * v);
    }
}

console.log(multTable);