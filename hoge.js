window.onload = function(){
	// window.alert("hello");
	var freeTime = 15; //分
	function goShuzo(){
		window.location.href = 'http://www.shuzo.co.jp/message/';
	}
	setTimeout(goShuzo, freeTime*60000);

};