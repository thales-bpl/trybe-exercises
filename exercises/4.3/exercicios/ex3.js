let n = Number
n = 5;

for (let index = 1; index <= n; index += 1) {
    let line = '';
    let asterisco = n - index;

    for (let Index2 = 0; Index2 < n; Index2 += 1) {
        if (line.length < asterisco) {
            line += ' ';
        } else {
            line += '*';
        }
    }
console.log(line);
}