$(document).ready(function() {
	$(window).on("load", function() {
		imgLocation();//加载本地图片，在不滚动时，页面出现的图片
	    //用json的数据格式定义存储一个图片地址数组
	    var dataImg = {
				"data": [{"src": "1.jpg"}, {"src": "2.jpg"}, {
					"src": "3.jpg"
				}, {
					"src": "4.jpg"
				}, {
					"src": "5.jpg"
				}]
			}; 
		//当滚动时触发加载动态图片         
         window.onscroll = function() {
		 	if (scrollside()) {
				$.each(dataImg.data, function(index, value) {
					var box = $("<div>").addClass('box').appendTo($('.container'));
					var content = $("<div>").addClass('content').appendTo(box);					
					$("<img>").attr("src", "./images/" + $(value).attr("src")).appendTo(content);
				});
				imgLocation();
			}
		};
	});
});
//设置当右侧滚动条到一定距离是加载图片
function scrollside() {
	var box = $(".box");	
	var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2)
	//var documentHeight = $(document).height();
	var scrollHeight = $(window).scrollTop();
	var windowHeight=$(window).height();
	//返回布尔值
	//console.log(lastboxHeight,windowHeight,scrollHeight);
	//当右侧滚动条到最后一张图片减Windows的高度时返回true
	return  lastboxHeight-windowHeight<=scrollHeight

}
//加载本地图片，在不滚动时，页面出现的图片
function imgLocation() {
	var box = $(".box");
	var boxWidh = box.eq(0).width();
	var num = Math.floor($(window).width() / boxWidh);
	var boxArr = [];
	box.each(function(index, value) {
		var minboxHight = box.eq(index).height();
		if (index < num) {
			boxArr[index] = minboxHight;
		} else {
			minboxHight = Math.min.apply(null, boxArr);
			var minIndex = $.inArray(minboxHight, boxArr);
			$(value).css({
				"position": "absolute",
				"top": minboxHight,
				"left": box.eq(minIndex).position().left
			});
			boxArr[minIndex] += box.eq(index).height();

		}
	});

}