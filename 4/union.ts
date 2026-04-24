function logId(id: string | number | boolean): void {
    if (typeof id === `string`) {
        console.log(id.toUpperCase())        
    }
    if (typeof id === `number`) {
        console.log(id.toString());
    }
}

logId(1);

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err)
    } else  {
        console.log(err)
    }
}

function logObject(obj: { a: number } | { b: number }) {
    if (`a` in obj) {
        console.log(obj.a)
    } else {
        console.log(obj.b)
    }
}