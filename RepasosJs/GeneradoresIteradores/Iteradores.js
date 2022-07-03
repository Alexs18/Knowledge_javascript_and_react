/**prototype */

function MakeSomething() {
}
/**solo se visualiza desde los navegadores */
console.log(MakeSomething.prototype.name);


const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);

/**generator can use to create a new iteration based on objects each object usefull to make a
 * 2 iteration....
 */
function Iterator(...array) {
    return {
        next: function() {
             return{
                value:array[0][1],
                done:false
            }
        }
    }
}

let Iter = Iterator(['1', '10']);
console.log(Iter.next())