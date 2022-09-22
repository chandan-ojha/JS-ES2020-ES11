//The global this was not standardized before ES11. Solution was
/*
var setGlobal = function (){
    if(typeof window !== 'undefined'){ return window; }
    if(typeof global !== 'undefined'){ return global; }
    throw new Error('unable to locate global object');
}
var myGlobal = setGlobal();
myGlobal.setTimeout(() => console.log('hello'),100);*/

//from ES11 we can use globalThis
//globalThis.setTimeout(() => console.log('hello'),100);

//BigInt
/*let largest_number =  Number.MAX_SAFE_INTEGER;
largest_number += 1;
largest_number = BigInt(largest_number) + 1n;
console.log(largest_number);*/

//Optional Chaining
/*const language = {
    name: 'Javscript',
    creator: 'Brendan Eich',
    library : {
        react: {
            company: 'Facebook'
        }
    }
}*/

//null value handle for object chaining
/*let company = language?.library?.react?.company;*/
//console.log(company);

//Arrays
/*let colors = ['red','green','blue'];
colors = null;
console.log(colors?.[1]);*/

//Nullish Coalescing Operator

/*let language;
language = false;
console.log(language ?? 'Javascript'); //Javascript
console.log(language || 'Javascript'); //Javascript
console.log((name.firstname || name.lastname) ?? 'anonymous');*/

//Dynamic Import

/*
( async function() {
    const {add} = await import('./utlis.js');
    const {remove} = await import('./utlis.js');
    add();
    remove();
})();*/

/*import('./utlis.js')
    .then(({add, remove}) => {
        add();
        remove();
    });*/

//promise.allSettled
/*const promise1 = new Promise(resolve => resolve('🍔'));
const promise2 = new Promise((_,reject) => reject('🍎'));
const promise3 = new Promise(resolve => resolve('🍕'));*/

//traditional use
/*Promise.all([promise1,promise2,promise3])
    .then(response => console.log(response))
    .catch(error => console.log(error));*/

/*Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))
    //.catch(error => console.log(error));*/


//~ String.prototype.matchAll()
const text = 'My favourite colors are #FFFFFF AND #000000';
const regex = /#?(?<group1>[\da-fA-F]{2})(?<group2>[\da-fA-F]{2})(?<group3>[\da-fA-F]{2})/g;

const matches = text.match(regex);
//console.log(matches);

const matchesAll = text.matchAll(regex);
//console.log(matchesAll);

for(let match of matchesAll){
    console.log(match);
}













