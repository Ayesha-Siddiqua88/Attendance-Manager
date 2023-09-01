

//code that generates qrcode
function generateQRCode(text) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      width: 300,
      height: 300,

    });
    
// expiration time of qrcode
var expireTime=10;

setTimeout(function(){
    qrcode.clear();
    alert("The qrcode has been expired!");
},expireTime*60*1000);

    qrcode.makeCode(text);
}


//   qrcode encoded on the date of that day
var button=document.getElementById("generateBtn").addEventListener("click", function() {
    var currentDate = new Date().toISOString().slice(0, 10); 
    generateQRCode(currentDate);

     });
// to make the button disappear after being clicked
var button2=document.getElementById("generateBtn")

    button2.addEventListener("click",function(){
        button2.classList.add('remove')
    })

 