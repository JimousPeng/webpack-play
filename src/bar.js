// const foo = require('./foo.js');
console.log(-1, foo)
import foo from './foo.js'
// console.log('value of foo1:', foo);
// module.exports = 'this is bar.js'; // Commonjs module
// export default 'this is bar.js'

console.log(3, foo)
let invoked = false;
function bar(invoker) {
    console.log(4)
    if(!invoked) {
        invoked = true;
        console.log(invoker + ' invokes bar.js');
        foo('bar.js', invoked)
    }
};
export default bar;