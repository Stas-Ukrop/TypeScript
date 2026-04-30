class User{
    name='';
    age=0;
    constructor();//конструктор реализации
    constructor(name: string);
    constructor(age: number);
    constructor(name:string,age:number);
    constructor(nameOfAge?: string|number, age?:number) { //конструктор имплементации
        
        if (typeof nameOfAge === 'string'){
            this.name = nameOfAge;
            
        } else if (typeof nameOfAge === 'number') {
            this.age=nameOfAge
        }   
    }
}

const user = new User('Vasya')
const user2 = new User();


class Admin{
    role: number;
    constructor(role: number) {
        this.role = role;
    }
}

const admin = new Admin(0);
admin.role = 1;

{
    enum PaymentStatus{
        Holded,
        Processed,
        Reversed
    }

    class Payment{
        id: number;
        status: PaymentStatus;
        createAt: Date;
        updateAt?: Date;
        constructor(id: number) {
            this.id = id;
            this.createAt = new Date();
            this.status = PaymentStatus.Holded;
            // this.updateAt = new Date();

        }

        getPaymentLifeTime(): number {
            return new Date().getTime() - this.createAt.getTime();
        }
        unholdPayment():void {
            if (this.status === PaymentStatus.Processed) {
        throw new Error('платеж не может быть возвращен')
            }
            this.status = PaymentStatus.Reversed;
            this.updateAt = new Date();
        }

    }
}
{
    class User{
        skills: string[];

        constructor(skills:string[]) {
            this.skills = [];
        }
        addSkill(skill: string|string[]): void {    //перегрузка функции 
            if (typeof skill === 'string') {
                this.skills.push(skill);
            } else {
                this.skills.concat(skill)
            }
        }
    }
}
{
    interface ILogger{
        log(...args:unknown[]):void;
        error(...args:unknown[]):void
    }
    class Logger implements ILogger{
        log(...args: unknown[]): void {
           console.log(...args);
        }
        async error(...args: unknown[]): Promise<void> {
            console.log(...args);
        }

    }

    ///

    interface IPayable{
        pay(paymentId: number): void;
        price?:number
    }
    interface IDeletable{
        name(nameID: string): void;
    }
    class User implements IPayable,IDeletable{
        name(nameID: string): void {
            throw new Error("Method not implemented.");
        }
        pay(paymentId: number|string): void {
            throw new Error("Method not implemented.");
        }
        price?: number;
        
    }

    ///
    
    

}
{
    type PaymentStatus = 'new' | 'paid';

    class Payment {
        id: number;
        status: PaymentStatus = 'new';

        constructor(id:number) {
            this.id = id;
        }
        pay() {
            this.status='paid'
        }
    }

    class PersistedPayment extends Payment{
        databaseID: number;
        poindAt?: Date;

        constructor(databaseId:number) {
            const id = Math.random();
            super(id)
            this.databaseID = databaseId;
        }
        save() {
            
        }
        override pay(date?: Date) { //переопределение метода в классе
            // super.pay();
            if (date) {
                this.poindAt = date;
            }
        }
    }
}