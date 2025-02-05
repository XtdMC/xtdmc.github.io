// 跳转通用中间页

function author() {let a = document.createElement("a");a.setAttribute("href", 'https://github.com/xtdmc/');a.setAttribute("target", "_blank");a.click();a.remove();return;};
function author_bilibili() {let a = document.createElement("a");a.setAttribute("href", './');a.setAttribute("target", "_blank");a.click();a.remove();return;};
function hub() {window.location.href="/"};
document.getElementById("noscript").setAttribute("style", "display:none;");
const wait=3000; //等待时长（ms）