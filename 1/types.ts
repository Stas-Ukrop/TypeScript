let age:number = 30;
let name: string = 'Ivan';
let isOnline: boolean = true;
let emptyValue: null = null;
let notAssigned: undefined = undefined;
let big: bigint = 100n;
let id: symbol = Symbol('id');

// object
let user: object = { name: "ivan", age: 25 };

// array
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Ann", "Bob"];

// tuple
let person: [string, number] = ["Ivan", 25];

// any
let data: any = 5;
data = "Ivan";
data = true;

// unknown
let value: unknown = "hello";

// void
function logMessege(): void{
    console.log('fgdfgd');
}

// never - никогда нормально не заканчивается(выбрасывает ошибку)
function fail(): never{
    throw new Error("fail");
}

// union
{
    let code: string | number = 200;
    code = 'ok';
}

// type
{
type User = {
    name: string;
    age: number;
};

    let user: User = {name:'Ivan', age:25}
}

// interface
{
    interface Product{
        title: string;
        price: number;
    }
    let product:Product={title:'Oreiro', price:25}
}