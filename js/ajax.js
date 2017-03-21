function ajax(method,url,func,data){
   //创建ajax对象
   var xmlHttp=null;
   if(window.XMLHttpRequest){
   	xmlHttp=new XMLHttpRequest();
   }else{
   	xmlHttp=new ActiveXObject("Microsoft.XMLHTTP")
   }
   //准备要发送的数据
   //设置请求数的方式和请求的目标地址
    xmlHttp.open(method,url);
    //设置编码格式
    if(data){
    xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    }
    //绑定事件
    xmlHttp.onreadystatechange=function(){
    	if(xmlHttp.readyState==4&&xmlHttp.status==200){
           func(xmlHttp.responseText)
    	}
    }
    //发送数据
    if(data){
    	xmlHttp.send(data);
    }else{
    	xmlHttp.send();
    }
}