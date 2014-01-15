$(function(){
	$("#source ul li").click(function(){
		$("#source ul li").removeClass("active")
		$(this).addClass("active")
	})
	$("#li-html").click(function(){
		$("#textarea textarea").hide();
		$("#textarea #html").show();
		$("#textarea #html").focus();
	})
	$("#li-css").click(function(){
		$("#textarea textarea").hide();
		$("#textarea #css").show();
		$("#textarea #css").focus();
	})
	$("#li-js").click(function(){
		$("#textarea textarea").hide();
		$("#textarea #js").show();
		$("#textarea #js").focus();
	})

	winWid=$(window).width();
	$("#output").width(winWid-608)

	close_bar=false;
	$("#sidebar").click(function(){
		if(close_bar){
			$("#source").animate({'left':'0px'},200)
			$("#output").animate({'left':'608px','width':winWid-608},200)
			close_bar=false;
		}else{
			$("#source").animate({'left':'-600px'},200)
			$("#output").animate({'left':'8px','width':winWid-8},200)
			close_bar=true;
		}
	})

	$("textarea").keydown(function(e) {
		data=$(this).val();
		currentCaret=$(this).getCaret();
		if (e.keyCode === 9) {
			e.preventDefault();
			if($(this).val().toLowerCase()=="html"){
				$(this).val("<!--HTML-->\n<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\t\n</body>\n</html>")
				$(this).setCaret(59)
			}else{
				$(this).val(data.substr(0,currentCaret)+"\t"+data.substr(currentCaret));
				$(this).setCaret(currentCaret+1)
			}
		}
	});
	$.fn.setCaret = function(pos){
		this.each(function(index,elem){
			if(elem.setSelectionRange){
				elem.setSelectionRange(pos,pos);
			} else if(elem.createTextRange){
				var range = elem.createTextRange()
				range.collapse(true)
				range.moveEnd('character',pos)
				range.moveStart('character',pos)
				range.select();
			}
		})
		return this;
	}
	$.fn.getCaret = function(){
		var pos=0;
		var el=$(this).get(0);
		if(el.selectionStart || el.selectionStart == '0'){
			pos = el.selectionStart
			return pos;
		}
	}

	$("#button").click(function(){
		html=$("#html").val();
		css=$("#css").val();
		js=$("#js").val();
		//alert(html+"\n\n\n"+css+"\n\n\n"+js)
		$.post('script.php',
			{htmldata:html,cssdata:css,jsdata:js,cssfile:'output.css',jsfile:'output.js'},
			function(){
				loadIframe('output', 'system/output/output.php')
			}); 
		loadIframe('output', 'system/output/output.php')
	})

	function loadIframe(iframeName, url) {
		var $iframe = $('#' + iframeName);
		if ( $iframe.length ) {
			$iframe.attr('src',url);   
			return false;
		}
		return true;
	}

})