let a =6
let write = confirm("want to go ahead")
if(write) {
  document.write(a)
} else {
  document.write("please allow")
}
console.log(window)
console.log(document)
console.log(document.body)
// problems on javascript in browser
//1.create a program to check whether someone can drive or not
let runagain = confirm("would you like to repeat")
while(runagain) {
let age = prompt("enter your age")
const candrive = (age)=> {
  if(age>=18) {
  alert("you can drive")
} else {
  alert("you can not drive")
} 
}
}
//2.use confirm in q1 to prompt aagin

