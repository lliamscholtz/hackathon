var Table = require('cli-table');

var table = new Table({
    head: ['Input', 'Expected', 'Result'],
    colWidths: [50, 50, 50],
});

var logTable = [];

function reverse(request, solution) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const wordVowels = [];
    var arr = request.split('');
    let response = '';

    arr.map(function (char) {
        if (vowels.includes(char.toLowerCase())) {
            wordVowels.push(char);
        }
    });

    // flip it
    wordVowels.reverse();

    arr.map(function (char) {
        if (vowels.includes(char.toLowerCase())) {
            response = response + wordVowels[0];
            wordVowels.shift();
        } else {
            response = response + char;
        }
    });

    let color = '\x1b[30m\x1b[42m';
    if (solution !== response) color = '\x1b[30m\x1b[41m';

    console.log(
        '\x1b[0m' +
            request +
            ' => ' +
            solution +
            ' => ' +
            color +
            response +
            '\x1b[0m'
    );

    table.push([request, solution, response, solution !== response ? '❌' : '✅']);

    logTable.push({
        input: request,
        expected: solution,
        result: response,
        status: solution !== response ? '❌' : '✅',
    });
}
console.log();
console.log('███████╗██╗░░░░░██╗██████╗░');
console.log('██╔════╝██║░░░░░██║██╔══██╗');
console.log('█████╗░░██║░░░░░██║██████╔╝');
console.log('██╔══╝░░██║░░░░░██║██╔═══╝░');
console.log('██║░░░░░███████╗██║██║░░░░░');
console.log('╚═╝░░░░░╚══════╝╚═╝╚═╝░░░░░');
console.log();

reverse('Hello!', 'Holle!');
reverse('Tomatoes', 'Temotaos');
reverse('Reverse Vowels In A String', 'RivArsI Vewols en e Streng');
reverse('This will fail', 'RivArsI Vewols en e Streng');
reverse(
    'The quick brown fox jumped over the lazy dog',
    'Tho qaeck brewn fox jempud ovor thi luzy deg'
);
reverse(
    'The wheels on the bus go round and round',
    'Thu whoals un tho bos gu reond end reend'
);
reverse(
    'k1jauFP ygK LOyV Yelm 40qMc mwc s0givwa jLN GRo0H',
    'k1joaFP ygK LiyV Yelm 40qMc mwc s0gOvwu jLN GRa0H'
);
reverse(
    'FQQne iMT 43Bfp2 CRkWbCR GEEV DgVYjJC x2Pg',
    'FQQnE EMT 43Bfp2 CRkWbCR GieV DgVYjJC x2Pg'
);

console.log();
console.log(table.toString());

// var twirlTimer = (function () {
//     var clock = ['🕛', '🕑', '🕒', '🕓', '🕕', '🕗', '🕘', '🕙'];
//     var index = 0;
//     return setInterval(function () {
//         process.stdout.write('\r' + clock[index++]);
//         index &= 7;
//     }, 500);
// })();

console.log();
console.table(logTable);
