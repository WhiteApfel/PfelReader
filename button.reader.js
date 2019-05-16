(function(){
if(document.getElementById('ReaderModeButton8921')==null)
	{
		var readerbutton = document.createElement("div");
		readerbutton.setAttribute("id", "ReaderModeButton8921");
		readerbutton.setAttribute("style",";font-size:150%;position:absolute;top:3em;right:0;border-radius:2em 0 0 2em;padding:0.5em 0.75em;background-color:#000;opacity:0.7;z-index:99999999;color:white;");
		readerbutton.setAttribute("onclick","var sc = document.createElement('script');sc.src='https://reader.pfel.ru/reader.js?ver=218';document.body.appendChild(sc);");
		readerbutton.innerHTML = "📖";
		document.body.appendChild(readerbutton);
	}
})()
