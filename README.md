# PfelReader for browser

## How to install (Via)?
Add code `(function(){var sc = document.createElement('script');sc.src='https://reader.pfel.ru/button.reader.js';document.body.appendChild(sc);})()` to `Settings > Scripts`

## How to install (Via. As bookmarklet)?
Add code `javascript:/*PfelReader*/(function(){if(!document.getElementById('ReaderModeButton8921')){var rb = document.createElement('div');rb.id='ReaderModeButton8921';rb.setAttribute('style',';font-size:150%;position:absolute;top:3em;right:0;border-radius:2em 0 0 2em;padding:0.5em 0.75em;background-color:#000;opacity:0.7;z-index:99999999;color:white;');rb.innerHTML = '📖';rb.onclick=function(){var sc = document.createElement('script');sc.src='https://reader.pfel.ru/reader.js';document.body.appendChild(sc);}document.body.appendChild(rb);})()` to `Bookmarklet`

## How to use (other browsers)?
Enter the `javascript:(function(){var sc = document.createElement('script');sc.src='https://reader.pfel.ru/button.reader.js';document.body.appendChild(sc);})()` in the address bar or browser-console

***
## Many thanks to the [Moz://a](https://github.com/mozilla/readability) team for the Readability function, that defines the “useful” content

***

## Как установить (Via)?
Добавьте код `(function(){var sc = document.createElement('script');sc.src='https://reader.pfel.ru/button.reader.js';document.body.appendChild(sc);})()` в `Настройки > Скрипты`

## Как установить (Via. Как закладка)?
Дабавьте код `javascript:/*PfelReader*/(function(){if(!document.getElementById('ReaderModeButton8921')){var rb = document.createElement("div");rb.id='ReaderModeButton8921';rb.setAttribute('style',';font-size:150%;position:absolute;top:3em;right:0;border-radius:2em 0 0 2em;padding:0.5em 0.75em;background-color:#000;opacity:0.7;z-index:99999999;color:white;');rb.innerHTML = "📖";rb.onclick=function(){var sc = document.createElement('script');sc.src='https://reader.pfel.ru/reader.js';document.body.appendChild(sc);}document.body.appendChild(rb);})()` в `Закладки`

## Как использовать (другие браузеры)?
Введите `javascript:(function(){var sc = document.createElement('script');sc.src='https://reader.pfel.ru/button.reader.js';document.body.appendChild(sc);})()` в адресную строку или консоль браузера

***

## Огромное спасибо команде [Moz://a](https://github.com/mozilla/readability) за фукнцию Readability, которая и определяет "полезный" контент

***

## Beta! Analytics works!
`(function(){var sc = document.createElement('script');sc.src='https://reader.pfel.cc/beta.button.reader.js';document.body.appendChild(sc);})()`
