function foo(a,b){
  //Explicit type conversion to prevent type coercion issues
  return parseInt(a) + parseInt(b);
}
console.log(foo(1, "1")); //output: 2
console.log(foo(1,1)); //output:2