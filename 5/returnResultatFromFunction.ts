async function getData() {
    try {
        await fetch('')
    } catch (error){
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}

// never - мы никогда не вернемся

function genereateError(message: string): never{
    throw new Error(message);
}

function dumpError(): never{
    while (true) {
        
    }
}

function rec(): never{
    return rec()
}

type paymentAction = 'refund' | 'checkot' | 'reject';

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            //....
            break;
        case 'checkot':
            //.....
            break;
        case 'reject':
            //...
            break;
        default:
            const _: never = action;   //чтобы при добавлении свойства аподсвечивалось место где стоит обработать переменную
            throw new Error('нет такого action')
    }
}

// правильное преобразование типов и распыление свойств

interface User{
    name: string;
    email: string;
    login:string
}
interface Admin{
    name: string;
    role:number
}

const user: User = {
    name: 'Vasya',
    email: 'vasya@gmail.com',
    login:'vasia'
}
const admin: Admin={ //-так лучше не делать, потому что мы получаем все остальные поля в этом обьекте
    ...user,
    role:1
}

function userToAdmin(user: User): Admin{  //- это будет лучше 
    return {
        name: user.name,
        role:1
    }
}

{
    // type guard

    function isString(x: string | number): x is string{
        return typeof x === 'string';
    }

    function isAdmin(user: User | Admin): user is Admin{
        return 'role' in user;
    }
    function isAdminAlternative(user: User | Admin): user is Admin{
        return (user as Admin).role !== undefined;
    }

    function setRoleZero(user: User | Admin) {
        if (isAdmin(user)) {
            user.role = 0;
        } else {
            throw new Error('пользователь не админ')
        }
    }

}
{
    interface IPayment{
        sum: number;
        from: number;
        to: number;
        databaseId:number
    }
    enum PaymentStatus{
        Success = 'success',
        Failed='failed'
    }
    interface IPaymentRequest extends IPayment{

    }
    interface IDataSuccess extends IPayment{

    }
    interface IDataFailed{
        errorMessage: string;
        errorCode:number
    }
    interface IResponseSuccess{
        status: PaymentStatus.Success;
        data: IDataSuccess
    }
    interface IResponseFailed{
        status: PaymentStatus.Failed;
        data:IDataFailed
    }
    type f = (res: IResponseSuccess | IResponseFailed) => number;

    type Res = IResponseSuccess | IResponseFailed;

    function isSuccess(res: Res): res is IResponseSuccess{
        if (res.status === PaymentStatus.Success) {
            return true;
        }
        return false;
    }

    function getIdFromData(res: Res): number{
        if (isSuccess(res)) {
            return res.data.databaseId;
        } else {
            throw new Error(res.data.errorMessage)
        }
    }
}