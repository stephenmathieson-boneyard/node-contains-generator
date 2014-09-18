
function* foo() {
  for (var i = 1; i < 20; i++) yield i;
  yield 'yay!';
}

var gen = foo();
var val;
while (val = gen.next().value) {
  console.log(val);
}
