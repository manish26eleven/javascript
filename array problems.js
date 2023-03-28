// array problems
//1.create array that take input to add inyo array
let num=[1,2,3]
for(let i of num) {
  if(i==6) 
      break
  }
  num.push(prompt("enter"))
}
console.log(num)
//2.keep adding number to array untill 0 is added
 let num = [1,2,3]
let a = num.push(prompt("enter"))
 a = Number.parseInt(a)
while(a!=0) {
  a = num.push(prompt("enter"))
}
 console.log(num)
//3.use filterfor divisibility
let num = [10,22,34,44,40]
let numm = num.filter((a)=> {
  return a%10==0
})
console.log(numm)
// 4.create an aaray of square of number
let sq = num.map((b)=> {
  return b*b
})
console.log(sq)
//5. use reduce for factorial
 let a = [1,2,3,4,5,6]
let n = a.reduce((h1,h2)=> {
  return h1*h2
})
console.log(n)