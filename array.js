//Arrays
let marks = [67,90,78,61]
console.log(marks)
console.log(typeof marks)
marks[0] = 96
console.log(marks)
marks[4] =70
console.log(marks)
// arrays methods
let num = [1,2,3,4]
let b = num.toString()
console.log(b)
let c = num.join("-")
console.log(c)
num.pop()
console.log(num)
console.log(typeof c)
let r = num.pop()
console.log(r)
console.log(num)
num.push(3)
num.push(4)
console.log(num)
num.shift()
console.log(num)
num.unshift(1)
console.log(num)
delete num[3]
console.log(num)
let numm = [11,12,13,14]
let newarray = num.concat(numm)
console.log(newarray)
console.log(num)
console.log(numm) 
// sort method
let mark= [40,98,87,80,56]
mark.sort()
console.log(mark)
let m =[14,22,229,3,5,551,6,7,8]
m.sort()
console.log(m)
let compare = (a,b)=>{
  return b-a;
}
m.sort(compare)
console.log(m)
m.reverse()
console.log(m)
// splice and slice
let d = [1,2,3,4,5,6,7,8]
d.splice(2,3,11,12,13)
console.log(d)
let e = d.slice(2)
console.log(e) 
let num = [3,5,1,2,4]
num.forEach((a)=>{
  console.log(a*a)
})
let arr = Array.from("manish")
console.log(arr)
for(let i of num){
  console.log(i*i)
} 
// map method
let a = num.map((value)=> {
  console.log(value)
  return (value+1)
})
console.log(a)
let d = a.filter((b)=>{
  return b<5
})
console.log(a)
console.log(d)
let e = [1,2,3,4,5]
let f = e.reduce((h1,h2,h3)=> {
  return h1+h2+h3
})
console.log(f)