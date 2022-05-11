// ajax.js

//1：创建Ajax对象
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'); // 兼容IE6及以下版本
//2：配置 Ajax请求地址
xhr.open('get', './click.html', true);
//3：发送请求
xhr.send(null); // 严谨写法
//4:监听请求，接受响应
xhr.onreadysatechange = function () {
    if (xhr.readySate == 4 && xhr.status == 200 || xhr.status == 304)
        console.log(xhr.responsetXML)
}


var xhr = new XMLHttpRequest()
xhr.open('get','./click.html',true)
xhr.send(null)
xhr.onreadysatechange = function(){
    if(xhr.readySate == 4 && xhr.status ==200){
        
    }
}