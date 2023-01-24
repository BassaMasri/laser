let wsbtc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let BtcPriceElement = document.getElementById('stock-price-btc');
let wsdoge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
let DogePriceElement = document.getElementById('stock-price-doge');
let wsbnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let BnbPriceElement = document.getElementById('stock-price-bnb');
let lastPrice = null;

wsbtc.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(1);
    BtcPriceElement.innerText = price;
    BtcPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
};


wsdoge.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(5);
    DogePriceElement.innerText = price;
    DogePriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
};


wsbnb.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(1);
    BnbPriceElement.innerText = price;
    BnbPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
};
