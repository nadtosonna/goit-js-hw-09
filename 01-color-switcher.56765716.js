!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},n=null;t.startBtn.addEventListener("click",(function(){n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.56765716.js.map
