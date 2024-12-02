class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(customInstanceOf(dog, Dog));     // true
console.log(customInstanceOf(dog, Animal));  // true
console.log(customInstanceOf(dog, Array));   // false

function customInstanceOf(instance, parent) {
    let proto = Object.getPrototypeOf(instance);
    while(proto) {
        if (proto == parent.prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    return false;
}