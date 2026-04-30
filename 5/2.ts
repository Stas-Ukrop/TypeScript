{ 
    interface User {
  id: number;
  name: string;
}

function isUser(value: unknown): value is User {
  return (
    typeof value ==='object' && value !==null && 'id' in value && 'name'in value && typeof value.id==='number'&& typeof value.name==='string'
  );
}

const data: unknown = {
  id: 1,
  name: 'Ivan'
};

if (isUser(data)) {
  console.log(data.name);
}
}
{ 
    type Status = 'published' | 'draft' | 'deleted';

function isStatus(value: unknown): value is Status {
  return (
    typeof value ==='string'&&value !==null&&(value==='published'||value==='draft'||value==='deleted')
  );
}

const statusFromServer: unknown = 'draft';

if (isStatus(statusFromServer)) {
  console.log(statusFromServer);
}
}
{
    function isNumberArray(value: unknown): value is number[] {
  return (
    Array.isArray(value)&&  value.every((el)=>typeof el==='number')
  );
}

const data: unknown = [10, 20, 30];

if (isNumberArray(data)) {
  console.log(data.reduce((acc, item) => acc + item, 0));
}
}
{
    interface OrderbookLevel {
  price: string;
  size: string;
}

function isOrderbookLevel(value: unknown): value is OrderbookLevel {
    return (
      typeof value==='object'&& value!==null&&'price' in value &&'size'in value&& typeof value.price==='string'&&typeof value.size==='string'
  );
}

const level: unknown = {
  price: '62100.5',
  size: '0.42'
};

if (isOrderbookLevel(level)) {
  console.log(Number(level.price), Number(level.size));
}
}
{
    interface Trade {
  symbol: string;
  price: string;
  qty: string;
  side: 'Buy' | 'Sell';
}

function isTrade(value: unknown): value is Trade {
    return (
        typeof value === 'object' &&
        value !== null &&
        'symbol' in value &&
        'price' in value &&
        'qty' in value &&
        'side' in value &&
    typeof value.symbol === 'string' &&
    typeof value.price === 'string' &&
    typeof value.qty === 'string' &&
    (value.side === 'Buy' || value.side === 'Sell')
  );
}

const trade: unknown = {
  symbol: 'BTCUSDT',
  price: '62000',
  qty: '0.01',
  side: 'Buy'
};

if (isTrade(trade)) {
  console.log(trade.symbol, trade.side);
}
}