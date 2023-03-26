let obj= {
  manish: 90,
  rajan: 89,
  ankit:88
}

for(let a=0; a<Object.keys(obj).length;a++) {
  console.log(obj[(Object.keys(obj)[a])])
}
for(let b in obj){
  console.log(obj[b])
}
