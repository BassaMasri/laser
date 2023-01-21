let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');  //dogeusdt
let stockPriceElement = document.getElementById('stock-price');
let lastPrice = null;

ws.onmessage = (event) => { // onmessage should be assigned to a function, not invoked with parenthesis
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(1);
    stockPriceElement.innerText = price; // update the value of innerText with the price variable
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
};
