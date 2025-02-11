let zonadeclick = document.getElementById("boca");

let sonido = document.getElementById("audio");

zonadeclick.onclick = function () {
  sonido.play();
  console.log("clic en zona clickeable");
};