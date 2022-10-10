var obj={num:3}
var add= function(x){
     return this.num+x;
}
console.log(add.call(obj,5))