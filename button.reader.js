(function(){
if(document.getElementById('ReaderModeButton8921')==null)
{var buttoncheck = true}
else{var buttoncheck = false}
var mySet = new Array ("www.google.com", "ria.ru", "4pda.ru", "www.4pda.ru", "touch.i.ua", "pfel.ru", "indicator.ru", "zen.yandex.ru", "mail.ru", "www.4pda.ru", "translate.google.ru", "schools.by", "crdroid.net", "samlib.ru", "gaysclub.org", "rocketbank.ru", "shikimori.org", "library.pfel.ru", "cloud.pfel.ru", "quotes.pfel.cc", "pfel.ru", )
if(mySet.indexOf(document.domain) != -1){buttoncheck=false}
if(buttoncheck)
	{
		var readerbutton = document.createElement("div");
		readerbutton.setAttribute("id", "ReaderModeButton8921");
		readerbutton.setAttribute("style","font-size:6vmin;position:absolute;top:17vmin;right:0;border-radius:7vmin 0 0 7vmin;padding:1.5vmin 3vmin;background-color:#000;opacity:0.8;z-index:99999999;color:#FFF");
		readerbutton.setAttribute("onclick","var sc = document.createElement('script');sc.src='https://reader.pfel.ru/reader.js?ver=218';document.body.appendChild(sc);");
		readerbutton.innerHTML = "&#128214;";
		document.body.appendChild(readerbutton);
		noCorrect = document.createElement("span");
		noCorrect.setAttribute("style","font-size:4vmin;display:block;background-color:#e4ecfa;color:#1a73e8;text-align:center;bottom:0;left:0;width:100%;padding:0.5em 0;text-decoration:underline;");
		noCorrect.setAttribute("onclick","var an = document.createElement('img');an.setAttribute('src','https://yip.su/19mFN6.png');an.setAttribute('style','display:none;');document.body.appendChild(an);");
		noCorrect.innerHTML = "<unlink onclick=\"var an = document.createElement('img');an.setAttribute('src','https://yip.su/19mFN6.png');an.setAttribute('style','display:none;');document.body.appendChild(an);\">Page doesn't need PfelReader</unlink>";
		document.body.appendChild(noCorrect);
	}
})()
