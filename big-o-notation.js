// O(1) CONST (CONSTANTE)

const fruits = ["apple","orange","pear","kiwi","melon"]

const consoleFirstItem = items =>{
    console.log(items[0])
}

consoleFirstItem(fruits)

//O(n) -> LINEAL

function consoleNumbersTo(n){
    for(let i = 1;  i<=n; i++){
        console.log(i)
    }
}
consoleNumbersTo(10)


const fruits2 = ["apple","orange","pear","kiwi","melon"]

const consoleAllitems = items =>{
    items.forEach(item => console.log(item))
}
consoleAllitems(fruits2)


function consoleNumbersTo2(n){
    for(let i = 1; i <= n; i++){
        console.log(i)
    }
    for(let i = 1; i <= n; i++){
        console.log(i)
    }
    for(let i = 1; i <= n; i++){
        console.log(i)
    }
}

consoleNumbersTo2(10)


//O(N^2)- CUADRATICA

function consoleMultiplicationOf(n){
 for(let i = 1; i<=n; i++){
   for(let j = 1; j<= n; j++){
       console.log(`${i}*${j} = ${i*j}`)
   }
 }
}

consoleMultiplicationOf(10)


const fruits3 = ["apple","orange","pear","kiwi","melOn"]
const isVowel = char =>["a","e","i","o","u"].includes(char.toLowerCase())

const consoleAllVowels = items => {
    items.forEach(item =>{
     item.split("").forEach(char =>{
         if(isVowel(char)){
             console.log(char)
         }
     })
  })
}

consoleAllVowels(fruits3)


function consoleMultiplicationOf(n){
    for(let i = 1; i <= n; i++){
        console.log(i)
    }
    for(let i = 1; i<=n; i++){
      for(let j = 1; j<=n; j++){
         console.log(`${i}*${j}=${i*j}`)
      }
    }
}

consoleMultiplicationOf(10)


//Worst case ---Cuadratica tambien

const fruits4 = ["apple","orange","pear", "kiwi", "melon"]

const bruteSearch = (arr,item)=>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] ===item){
            return `Found${item} at ${i+1}`
        }
    }
}

bruteSearch(fruits4,"kiwi")

//O(log n) LOGARITMICA

function binarySearch(sortedArray,key){
    let start = 0;
    let end = sortedArray.length -1;

    while(start <= end){
        let middle = Mith.floor((start + end)/2)
   
    if(sortedArray[middle]=== key){
        //found the key
        return middle
    }else if(sortedArray[middle] < key){
        //continue searching to the rigth
        start = middle + 1
    }else{
        //search searching to the left
        end =  middle - 1
    }
  }
  //key wasn't found
  return - 1
}



