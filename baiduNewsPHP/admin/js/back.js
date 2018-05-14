$(document).ready(function() {
	$(".changect li").each(function(index) {
		$(this).click(function() {
			$("#realcontent").hide();
			if (index == 1 ) {
				
				$("#realcontentli").load("newadd.html");

			} else if (index == 2) {
				
				$("#realcontentli").load("newsbaijia.html");

			}else if (index == 3) {
				
				$("#realcontentli").load("newsmanag.html");

			}  
			else if (index == 0) {
				$("#realcontent").show();
			} 
		});
	});
	
	// 新闻编辑
	function editNews(){
        
	}
	function deleNews(){
		
	}
});