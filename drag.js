(function(w){
	w.drag = function (node){
			//元素一开始的位置
			var elementPoint={left:0,top:0};
			//鼠标一开始位置
			var startPoint={left:0,top:0};
			//差值
			var dis={left:0,top:0}
			
			node.onmousedown=function(ev){
				var e = ev||event;
				elementPoint.left=node.offsetLeft;
				elementPoint.top=node.offsetTop;
				
				startPoint.left=e.clientX;
				startPoint.top=e.clientY;
				
				dis.left=startPoint.left - elementPoint.left;
				dis.top=startPoint.top - elementPoint.top;
				
				//曲线救国  不能让默认事件有执行的机会
				if(node.setCapture){
					node.setCapture();
				}
				
				document.onmousemove=function(ev){
					var e = ev||event;
					//鼠标移动时的位置
					var nowPoint={};
					nowPoint.left=e.clientX;
					nowPoint.top=e.clientY;
					
					var L = nowPoint.left - dis.left;
					var T =nowPoint.top - dis.top;
					
					if(L<10){
						L=0;
					}else if(L>document.documentElement.clientWidth - node.offsetWidth){
						L=document.documentElement.clientWidth - node.offsetWidth
					}
					
					if(T<10){
						T=0;
					}else if(T>document.documentElement.clientHeight - node.offsetHeight){
						T=document.documentElement.clientHeight - node.offsetHeight;
					}
					
					node.style.left=L +"px";
					node.style.top=T+"px";
					
				}
				
				document.onmouseup=function(){
					document.onmousemove=document.onmouseup=null;
					if(document.releaseCapture){
						document.releaseCapture();
					}
				}
				
				return false;
			}
		}
})(window)
