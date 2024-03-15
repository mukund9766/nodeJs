// working of asynchronous programming language e.g JavaScript and nodeJs


// let a= 10;
// let b=20;

// setTimeout(()=>{
//     b=30;
// },2000)
// console.log(a+b)



// ......promise example........//
let a= 10;
let b=20;

setTimeout(()=>{
    b=30;
},2000)
let waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30)
    }, 2000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})

// ........Notes........//

// fetch function already have promise within it so we 
// don't to define promise within it
// we can directly use .then function for next process
// but if we have custom function that take lot time time then we have to define 
// the promise for that function