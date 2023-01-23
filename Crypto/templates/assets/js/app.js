let wsbtc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');  //dogeusdt
let BtcPriceElement = document.getElementById('stock-price-btc');
let wseth = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
let EthPriceElement = document.getElementById('stock-price-doge');
let wsbnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let BnbPriceElement = document.getElementById('stock-price-bnb');
let lastPrice = null;

wsbtc.onmessage = (event) => { // onmessage should be assigned to a function, not invoked with parenthesis
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(1);
    BtcPriceElement.innerText = price; // update the value of innerText with the price variable
    BtcPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
};


wseth.onmessage = (event) => { // onmessage should be assigned to a function, not invoked with parenthesis
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(5);
    EthPriceElement.innerText = price; // update the value of innerText with the price variable
    EthPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
};


wsbnb.onmessage = (event) => { // onmessage should be assigned to a function, not invoked with parenthesis
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(1);
    BnbPriceElement.innerText = price; // update the value of innerText with the price variable
    BnbPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
};
