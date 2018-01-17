(()=>{
	var open=document.querySelectorAll(".footer_box .footer_box_main .footer_box_main_bottom .bottom_open");
	for(var i=0;i<open.length;i++){
		open[i].onclick=function(e){
			var tar=e.target;
			tar.className="";
			tar.parentNode.lastElementChild.className="bottom_close";
			tar.parentNode.className="";
			tar.parentNode.className="bottom_overflow";
			var close=document.querySelectorAll(".footer_box .footer_box_main .footer_box_main_bottom .bottom_close");
			for(var i=0;i<close.length;i++){
			close[i].onclick=function(e){
			var tar=e.target;
			tar.className="";
			tar.parentNode.firstElementChild.className="bottom_open";
			tar.parentNode.className="";
			tar.parentNode.className="footer_box_main_bottom_header";
		}
	}
		}
	}
})()