var express = require('express'),
    app = express(),
    port = process.env.PORT || 5001;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);

console.log("starting");

var path = __dirname + '//Users/deepmeh/grocery_receipts_001_1024.jpg',
          options = {localFile: true, string: true};
 
base64.base64encoder(path, options, function (err, image) {  
    if (err) { console.log(err); }  
    console.log(image);  
})

}
; 