function addEvent(elem,eventType,func){
	try{
     if(elem!=null &&typeof elem =="object"){
     	if(-[1,]){
     elem.addEventListener(eventType, func)
     	}else{  
     elem.attachEvent("on"+eventType,func)
     	}
     }
	}catch(e){
   alert(e.message)
	}
}