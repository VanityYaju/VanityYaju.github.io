onmessage = function(message) {
  importScripts('bitcoinjs.js');
  var pair = bitcoin.ECPair;
  var count = +message.data.count;
  while(true) {
    var key = pair.makeRandom()
    var address = key.getAddress();
    if(address.toLowerCase().startsWith('yaju')) {
      postMessage({event: 'found',
                   address: address,
                   privkey: key.toWIF()});
    }
    count++;
    if(count%81==0) {
      postMessage({event: 'count',
                   count: count});
    }
  }
}
