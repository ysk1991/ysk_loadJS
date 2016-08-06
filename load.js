//封装-预加载 直接引用  
//示例见 loadJSdemo。js
function pro(scale){
  if(scale<100){
    var scale=parseInt(scale)+"%";
    $(".scale h1").html(scale);
  }else{
    $(".scale").css("display","none");
  }
}
		function loading(imgs,obj){
			//用来装我们最后需要的所有图片对象的
			var loadingImgs = {};
			//获得到图片总量
			
			var len = 0;
			for (var i in imgs) {
				len++;
			}
			//加载完成的图片数量
			var num = 0;
			for (var i in imgs) {
				//创建一个image对象
				var imgObj = new Image();
//				imgObj.src = imgs.bg = "img/background.png";
				imgObj.src = imgs[i];
				imgObj.onload = (function(i){
					return function(){
						num++;
						loadingImgs[i] = this;
						var scale = (num / len).toFixed(2)*100;
						if(obj.progress){
							obj.progress(scale);
						}
						if(num>=len){
							if(obj.complete){
								obj.complete(loadingImgs);
							}
						}	
					}
				})(i)
			}	
		}
