interface IProduct {
    id: number;
    title: string;
    price: number;
}
interface IDeliveryHome{
    type: 'home';
    address: string;
    date: Date;
}
interface IDeliveryPickUp{
    type: 'pick-up';
    storeID: number;
    date: Date;
}
type DeliveryAddress = IDeliveryHome | IDeliveryPickUp;
interface ICart{
    products: IProduct[];
    deliveryAddress?: DeliveryAddress;
    addProduct(product: IProduct): void;
    removeProduct(productId: number): void;
    getTotalPrice(): number;
    setDelivery(delivery: DeliveryAddress): void;
    checkout(): boolean;
}

class Cart implements ICart {
    products: IProduct[] = [];
    deliveryAddress?: DeliveryAddress;
    
    constructor(products?: IProduct[]) {
        if (products) {
            this.products = products;
        }

    }
    addProduct(product: IProduct): void {
        this.products.push(product);
    }
    removeProduct(productId: number): void {
        this.products = this.products.filter(p => p.id !== productId);
    }
    getTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
    setDelivery(delivery: DeliveryAddress): void {
        this.deliveryAddress = delivery;
    }
    checkout(): boolean {
        if (this.products.length > 0 && this.deliveryAddress) {
            console.log('Checkout successful!');
            return true;
        } else {
            console.log('Please add products and set delivery address before checkout.');
            return false;
        }

    }
}

const cart = new Cart();
cart.addProduct({ id: 1, title: 'Product 1', price: 100 });
cart.addProduct({ id: 2, title: 'Product 2', price: 200 });
console.log('Total Price:', cart.getTotalPrice());
cart.setDelivery({ type: 'home', address: '123 Main St', date: new Date() });
cart.checkout();
