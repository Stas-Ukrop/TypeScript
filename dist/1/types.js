let age = 30;
let name = 'Ivan';
let isOnline = true;
let emptyValue = null;
let notAssigned = undefined;
let big = 100n;
let id = Symbol('id');
// object
let user = { name: "ivan", age: 25 };
// array
let numbers = [1, 2, 3];
let names = ["Ann", "Bob"];
// tuple
let person = ["Ivan", 25];
// any
let data = 5;
data = "Ivan";
data = true;
// unknown
let value = "hello";
// void
function logMessege() {
    console.log('fgdfgd');
}
// never - никогда нормально не заканчивается(выбрасывает ошибку)
function fail() {
    throw new Error("fail");
}
// union
{
    let code = 200;
    code = 'ok';
}
// type
{
    let user = { name: 'Ivan', age: 25 };
}
// interface
{
    let product = { title: 'Oreiro', price: 25 };
}
export {};
