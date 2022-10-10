var obj={
     'name':'dpk',
     'age':23
}
var printAge=function(){
     return this.age
}
var Age=printAge.bind(obj)
console.log(Age())