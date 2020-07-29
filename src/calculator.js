/*CommonJs*/
console.log('running 测试112', module.loaded)
// var name = 'calculator.js'
// exports.name = 'calculator123',
// exports.add = function(a, b) {
//     return a * b;
// }
module.exports = {
    name: 'calculator',
    add: function(a,b) {
        return a + b;
    }
}
// console.log('running 测试1123', module.loaded)
// var count = 0;
// module.exports = {
//     count: count,
//     add: function(a, b) {
//         count += 1;
//         return a + b;
//     }
// }



/*ES6*/
// export default {
//     name: 'calculator',
//     add: function(a,b) {
//         return a + b;
//     }
// }
// export { name }
// export let count = 0;
// export const name = 'calculator';
// const add = function(a, b) { return a + b; }
// export default {
//     add
// }