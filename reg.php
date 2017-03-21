<?php
header("content-type:text/html;charset=utf-8");
$userName=$_POST['userName'];
$names="tomjarrysusan";
if(strstr($names,$userName)){
	echo "1";
	}else{
	echo "0";
    }

?>