
function openHELP() {
  document.getElementById("help").showed=true;
};

let ownername = `XHI${Math.floor(Math.random()*1000)%10}`;
document.querySelectorAll("#n").forEach((e) => {
  e.innerHTML = ownername;
  e.style = "cursor: zoom-in;";
  e.addEventListener("click", () => {
    msg("恭喜发现彩蛋", "？", "success");
    setTimeout(() => {
      openURL("https://namemc.com/profile/b9fc48ab-6c0f-4246-945d-316a767a3b11", false);
    }, 3000);
  });
});