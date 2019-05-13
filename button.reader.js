(
	function()
	{
		if(document.getElementById('ReaderModeButton8921')==null)
			{var buttoncheck = true}
		else{var buttoncheck = false}
		if(buttoncheck)
		{
			var readerbutton = document.createElement("div");
			readerbutton.setAttribute("id", "ReaderModeButton8921");
			readerbutton.setAttribute("style","position:absolute;top:4em;right:0;padding:0.5em 0.75em;background-color:#000;opacity:0.7;z-index:999999;color:#F60");
			readerbutton.setAttribute("onclick","var titlepage = document.getElementsByTagName('title')[0];document.head.innerHTML = ' ';document.head.appendChild(titlepage);var sc = document.createElement('script');sc.src='https://reader.pfel.ru/reader.js';document.body.appendChild(sc);");
			readerbutton.innerHTML = "R";
			document.body.appendChild(readerbutton);
		}
	}
)()
