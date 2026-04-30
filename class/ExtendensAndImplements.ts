import shortid from 'shortid';



interface Sender {

    send(message: string): void;

}



class BaseNotification { 

    // shortid возвращает строку, поэтому меняем тип на string

    id: string = shortid.generate();

    text?: string;

    ts?: Date;



    // Выносим общую логику инициализации в защищенный метод.

    // protected означает, что метод доступен только внутри этого класса и его наследников.

    protected prepareToSend(message: string): void {

        this.text = message;

        this.ts = new Date();

    }

}



// Отдельный класс для Email

class EmailNotification extends BaseNotification implements Sender { 

    send(message: string): void {

        // Вызываем метод родителя, чтобы не дублировать код присвоения текста и даты

        this.prepareToSend(message);

        

        // Здесь в будущем будет логика подключения к SMTP

        console.log(`[EMAIL] Sending message: ID${this.id} - ${this.text} at ${this.ts}`);

    }

}



// Отдельный класс для SMS

class SMSNotification extends BaseNotification implements Sender {

    send(message: string): void {

        // Переиспользуем тот же метод родителя

        this.prepareToSend(message);

        

        // Здесь в будущем будет логика отправки HTTP-запроса к SMS-шлюзу

        console.log(`[SMS] Sending message: ID${this.id} - ${this.text} at ${this.ts}`);

    }

}



// Проверка работы

const email = new EmailNotification();

email.send("Hello via Email!");



const sms = new SMSNotification();

sms.send("Hello via SMS!");