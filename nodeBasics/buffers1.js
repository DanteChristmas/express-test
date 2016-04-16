// initialize from sting
var buf1 = new Buffer("a sample utf8 string", "utf-8");

var buf2 = new Buffer(256);
var len = buf2.write("another string sample");

console.log('buf1 = ' + buf1);
console.log('buf2 = ' + buf2);
console.log('octets written = ' + len);
