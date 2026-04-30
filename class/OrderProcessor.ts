interface IPayment { 
    pay(amount: number):boolean;
}
interface INotification {
    send(message: string): void;
}
interface IDiscount {
   apply(amount: number): number;
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
class noDiscount implements IDiscount {
    apply(amount: number): number {
        return amount;
    }
}
class FixedDiscount implements IDiscount {
    private discount: number;
    constructor(discount: number) {
        this.discount = discount;
    }
    apply(amount: number): number {
        return amount - this.discount;
    }
}

class PercentageDiscount implements IDiscount {
    private percentage: number;
    constructor(percentage: number) {
        this.percentage = percentage;
    }
    apply(amount: number): number {
        return amount - (amount * (this.percentage / 100));
    }
}

class OrderProcessor {
    private discount: IDiscount;
    
    private paymentMethod: IPayment;
    private notificationMethod: INotification;
    constructor(paymentMethod: IPayment, notificationMethod: INotification, discount: IDiscount) {
        this.paymentMethod = paymentMethod;
        this.notificationMethod = notificationMethod;
        this.discount = discount;
    }
    process(amount: number, message: string): void {
        const finalAmount = this.apply(amount);
        if (this.paymentMethod.pay(finalAmount)) { 
            this.notificationMethod.send(message);
        }
    }   
    apply(amount: number): number {
        return this.discount.apply(amount);
     }
}

const cardPayment = new CardPayment();
const emailNotification = new EmailNotification();
const cryptoPayment = new CryptoPayment();
const smsNotification = new SMSNotification();
const discount = new noDiscount();
const Fixed = new FixedDiscount(20);
const Percentage = new PercentageDiscount(10);
const orderProcessor1 = new OrderProcessor(cardPayment, emailNotification, Fixed);
orderProcessor1.process(100, 'Your order has been processed successfully!');
const orderProcessor2 = new OrderProcessor(cryptoPayment, smsNotification, Percentage);
orderProcessor2.process(200, 'Your order has been processed successfully!');