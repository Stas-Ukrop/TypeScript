interface IPayment { 
    pay(amount: number):boolean;
}
interface INotification {
    send(message: string): void;
}

class CardPayment implements IPayment {
    pay(amount: number): boolean {
        console.log(`Processing card payment of $${amount}`);
        return true;
    }
}

class CryptoPayment implements IPayment {
    pay(amount: number): boolean {
        console.log(`Processing crypto payment of $${amount}`);
        return true;
    }
}   

class EmailNotification implements INotification {
    send(message: string): void {
        console.log(`Sending email notification: ${message}`);
    }
}

class SMSNotification implements INotification {
    send(message: string): void {
        console.log(`Sending SMS notification: ${message}`);
     }
}

class OrderProcessor {
    private paymentMethod: IPayment;
    private notificationMethod: INotification;
    constructor(paymentMethod: IPayment, notificationMethod: INotification) {
        this.paymentMethod = paymentMethod;
        this.notificationMethod = notificationMethod;
    }
    process(amount: number, message: string): void {

        if (this.paymentMethod.pay(amount)) { 
            this.notificationMethod.send(message);

        };
    }
}

const cardPayment = new CardPayment();
const emailNotification = new EmailNotification();
const cryptoPayment = new CryptoPayment();
const smsNotification = new SMSNotification();
const orderProcessor1 = new OrderProcessor(cardPayment, emailNotification);
orderProcessor1.process(100, 'Your order has been processed successfully!');
const orderProcessor2 = new OrderProcessor(cryptoPayment, smsNotification);
orderProcessor2.process(200, 'Your order has been processed successfully!');