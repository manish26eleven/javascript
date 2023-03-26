//write a program to print "try again" untill the user enters the correct number
/*let target = 5;
function print(a) {
  if(a==target) {
    return
  } else {
    console.log("try again")
  }
}
let a = prompt("write a number")
print(a) */
let target = 4;
let i = prompt("write a number");
while(i!=target) {
  console.log("try again")
  i = prompt("write a number")
}