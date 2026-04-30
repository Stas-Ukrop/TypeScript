interface User{
    name:string
}

const a = {};

assertUser(a);
a.name = 'Vasya';

function assertUser(obj: unknown): asserts obj is User{ //возможность прокинуть сообщение об ошибке
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('нет пользователя');
}