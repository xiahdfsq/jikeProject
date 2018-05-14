$(document).ready(function() {
	// 顶部分类导航点击事件css事件
	$('#index_view_navigator .content td').click(function(event) {
		$(this).children('div').children('span').addClass('cur');
	    $(this).siblings().children('div').children('span').removeClass('cur')
	});	
    // 顶部分类导航点击事件切换事件
	$("#index_view_navigator td").each(function(index) {
        $("#index_view_sections .baijia").hide();

		$(this).click(function() {
			if (index == 0 ) {
				$("#index_view_sections .tuiju").show(); 

			} else if(index == 1){
				$("#index_view_sections .tuiju").hide(); 
				$("#index_view_sections .baijia").show();
			}

		});
	}); 
	// 推举页面数据获得
	$.ajax({
        url: 'mysql.php',
        type: 'GET',
        dataType: 'json',
        success:function(data){       
            $.each(data,function(index, el) {
                  var listitemsdiv=$('<div></div>');
                  listitemsdiv.appendTo('.newslist');  
                  listitemsdiv.addClass('listitems'); 
                  listitemsdiv.addClass('li-gg'); 
                  var listImagediv=$('<div></div>');
                listImagediv.appendTo('.listitems');
                listImagediv.addClass('listImage');
                listImagediv.addClass('li-img');
                var listimg=$('<img></img>');
                listimg.appendTo('.listImage');
                listimg.attr('src','images/newdata/'+data[index].newsimg);
                var listContentdiv=$('<div></div>');
                listContentdiv.appendTo('.listitems');
                listContentdiv.addClass('listContent');
                listContentdiv.addClass('li-cont');
                var listspan=$('<span></span>');
                listspan.appendTo('.listContent');
                listspan.append(data[index].newstitle);
                var listsb1=$('<b></b>');
                listsb1.appendTo('.listContent');
                listsb1.append(data[index].newsmaker);
                var listsb2=$('<b></b>');
                listsb2.appendTo('.listContent');
                listsb2.append(data[index].addtime);
                
            });               
        },
         error:function() {
             console.log('error'); 
        }
    });
 //百家新闻类目数据获得
    $.ajax({
        url: 'baijiaSql.php',
        type: 'GET',
        dataType: 'json',
        success:function(data){       
            $.each(data,function(index, el) {
                  var baijiadiv=$('<div></div>');
                  baijiadiv.appendTo('.baijia');  
                  baijiadiv.addClass('baijiaList'); 
                  baijiadiv.addClass('li-gg'); 
                  var baijiaImagediv=$('<div></div>');
                baijiaImagediv.appendTo('.baijiaList');
                baijiaImagediv.addClass('baijiaImage');
               baijiaImagediv.addClass('li-img');
                var listimg=$('<img></img>');
                listimg.appendTo('.baijiaImage');
                listimg.attr('src','images/newdata/'+data[index].baijiaimg);
                var listContentdiv=$('<div></div>');
                listContentdiv.appendTo('.baijiaList');
                listContentdiv.addClass('baijiaContent');
                listContentdiv.addClass('li-cont');
                var listspan=$('<span></span>');
                listspan.appendTo('.baijiaContent');
                listspan.append(data[index].baijiacontent);
                var listsb1=$('<b></b>');
                listsb1.appendTo('.baijiaContent');
                listsb1.append(data[index].baijiamaker);
                var listsb2=$('<b></b>');             
                listsb2.appendTo('.baijiaContent');
                listsb2.append(data[index].baijiatime);
                console.log(baijiadiv);
            });               
        },
         error:function() {
             console.log('error'); 
        }
         });
  

   });