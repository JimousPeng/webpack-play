// const bar = require('./bar.js');
console.log(0, bar)
import bar from './bar.js';
// console.log('value of bar12:', bar);)
// module.exports = 'this is foo.js' // CommonJs module
// export default  'this is foo.js'

console.log(1, bar)
function foo(invoker, invoked) {
    console.log(2, '开始执行函数', invoked)
    console.log(invoker + ' invoker foo.js');
    bar('foo.js');
}
export default foo;