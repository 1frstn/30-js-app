const fruits = ["apple","banana","orange","banana","banana","apple","kiwi","arange"]

const fruitCounts = fruits.reduce((accumulator,fruit) => {
    accumulator[fruit] = (accumulator[fruit] || 0) + 1
    return accumulator;
},{}) 

console.log("fruits NUmber>>>>",fruitCounts);


const arr = [4,7,0]

const sum = arr.reduce((accumulator,currentValue) => {
    return accumulator + currentValue
},0)

console.log("Sum reduce() >>>>",sum);

const smallestNumber = (array) =>{
    let initialNumber = 0
    for (let i = 0; i < array.length; i++) {
        if(array[initialNumber]<array[i]){
            initialNumber
        }else{
            initialNumber = i
        }
        
    }
    return array[initialNumber]
} 

console.log("SMALLEST NUMBER >>>>>>>",smallestNumber([12,32,6,0,-1,-4,1,-56,2,-3]));

const biggestNumber = (array) => {
    let initialNumber = 0
    for (let i = 0; i < array.length; i++) {
        if (array[initialNumber]>array[i]) {
            initialNumber
        }else{
            initialNumber = i
        }
        
        
    }
    return array[initialNumber]
} 

console.log("BIGGEST NUMBER>>>",biggestNumber([12,32,6,0,-1,-4,1,56,2,-3]));

console.log(Math.max(...arr));

console.log(Math.min(...arr));



function picukNum (arr) {
    if(arr.length === 0){
        return Infinity;
    }

    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i]<min){
            min = arr[i]
        }
        
    }
    return min
}

console.log("PICUK NUM>>>>",picukNum([2,5,6,0,10,-1,0]));


function mezinNumn (arr) {
    if(arr.length === 0){
        return Infinity;
    }

    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max = arr[i]
        }        
    }
    return max
    
} 

console.log("MEZIN >>>",mezinNumn([323,3.42,42,21,212321,4123412,3213123,1412,32143,124,1234,1243,4124232]));

function fetchData(callback){
    setTimeout(function(){
        callback("Data fetched!")
    },200)
}

fetchData(function(result){
    console.log(result);
})


function outer(){
    let outerVAr = "Im from outer"
    function inner(){
        console.log(outerVAr);
    }
    return inner
}
outer();

//calback example

function fetchData(callback){
    setTimeout(function(){
        callback("Data fetched")
    },200)
}

fetchData(function(result){
    console.log(result);
})

// promise example

function fetchDataPromise(){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            resolve("Data fetched")
        })
    },200)
}

fetchDataPromise()
     .then(result => console.log(result))
     .catch(err => console.log(err))



     
     
// Arrow function

const square = x => x*x;

// Destructuring


const larr = [2,4,5,-5,]

function largestLnm (larr){
    
    let max = larr[0]

    for (let i = 0; i < larr.length; i++) {
        if (larr[i] > max) {
            max = larr[i]
        }    
    }
   return max
}

console.log(largestLnm(larr));


let input = "turpentine and turtles"

const vowels = [ "a", "e", "i", "o", "u"]

let resultArray = []
let repitingValue = 0
for(let i=0;i<input.length;i++){
  if(input[i] === 'e'){
    resultArray.push('e')
  }
  if(input[i] === 'u'){
    resultArray.push('u')
  }
  for(let a = 0;a<vowels.length; a++){
    if(input[i] === vowels[a]){
      repitingValue+=1
      console.log(input[i])
      console.log(repitingValue)
      resultArray.push(input[i])
    }
  }

}

console.log(resultArray)

let resultString = resultArray.join('').toUpperCase()
console.log(resultString)


let arrayW = [500, 400, 400, 375, 300, 350, 325, 300]

function modeFinder(array){
    let frequencyMap = {}
    let maxFreqency = 0
    let mode = []
    
    for(let num of array){
        frequencyMap[num] = (frequencyMap[num] || 0) +1
        if(frequencyMap[num]>maxFreqency){
            maxFreqency = frequencyMap[num]
            mode = [num]
        }else if(frequencyMap[num] === maxFreqency && !mode.includes(num)){
            mode.push(num)
        }
        
    }
    console.log(frequencyMap);
    console.log(mode);
    return mode;
    
}
modeFinder([500, 400, 400, 375, 300, 350, 325, 300])


/* ssasa */
function statsFinder(array) {
    let length = array.length;
      let sum = array.reduce((acc, curr) => acc + curr, 0); // Initialize accumulator value to 0
    
      let mean = sum / length;
    
      let obj = array.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        if (acc[curr] > acc.max) {
          acc.max = acc[curr];
          acc.mode = curr; // Store the mode directly in the accumulator
        }
        return acc;
      }, { max: 1 });
    
      let mode = obj.mode;
    
    return [mean,mode]
}

/* 

function statsFinder(array) {
let sum = array.reduce((acc,val) => acc+val,0)
let mean = sum/array.length

let frequencyMap = {}
let maxFrequency = 0 
let mode = null
for(let num of array){
  frequencyMap[num] = (frequencyMap[num] | 0) + 1
  if(frequencyMap[num]>maxFrequency){
    maxFrequency = frequencyMap[num]
    
    mode = num
  }
}

return [mean,mode]
}


*/



function primeFinder(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  }