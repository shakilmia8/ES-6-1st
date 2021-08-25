// Old
const multiLineOld = 'this is first line \n' +
    'this is second line \n' +
    'this is third line\n' +
    'this is fourth line';
// console.log(multiLineOld);

// New
const multiLineNew = `this is first line
this is second line 
this is third line
this is fourth line`;
console.log(multiLineNew);

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = first + ' ' + last;
const fullNew = `${first} ${last}`;
console.log(fullNew);