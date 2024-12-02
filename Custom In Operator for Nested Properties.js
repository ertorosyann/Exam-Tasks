

function hasNestedProperty(obj, path) {

    if (path.includes('.')) {
        path = path.split('.');
        for (const element of path) {
            if (! obj[element]) {
                return false;
            }
            obj = obj[element]
        }        
        return true;
    } else {
        return obj[path] ? true : false;
    }

}

const user = { name: "Alice", address: { city: "Wonderland", zip: "12345", a:{b:'sf'} } };

console.log(hasNestedProperty(user, "name")); // true
console.log(hasNestedProperty(user, "address.city")); // true
console.log(hasNestedProperty(user, "address.state")); // false
console.log(hasNestedProperty(user, "address.a.b")); // true