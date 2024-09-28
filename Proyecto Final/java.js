document.getElementById('changeColorBtn').addEventListener('click', function() {
  // Cambiar textos del banner y guardar los originales para restaurarlos luego
  var banner = document.getElementById('background');
  var originalH1 = banner.querySelector('h1').innerText;
  var originalP = banner.querySelector('p').innerText;
  var originalBackgroundColor = banner.style.backgroundColor;

  banner.querySelector('h1').innerText = "¡Sabía que lo harías!";
  banner.querySelector('p').innerText = "Pareces Doofenshmirtz con sus inadores.";

  var container = document.querySelector('.container');
  var footer = document.querySelector('.footer');
  container.style.display = 'none';
  footer.style.display = 'none';

  var body = document.body;
  var originalBackgroundImage = body.style.backgroundImage;
  body.style.backgroundImage = 'url("https://i.pinimg.com/originals/35/58/0d/35580d64b9b883fd0e0678595fc2aefd.gif")';

  var intervalId = setInterval(function() {
    banner.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }, 200);

  setTimeout(function() {
    var newContent = document.createElement('div');
    newContent.className = 'centered-content';
    newContent.innerHTML = `<h1>Ya exploraste todo y no encontraste nada, como te dije que pasaría. ¿Contento?</h1>
                            <button id="restartBtn">Vuelve a empezar.</button>`;
    document.body.insertBefore(newContent, footer);

    document.getElementById('restartBtn').addEventListener('click', function() {
      clearInterval(intervalId);
      banner.querySelector('h1').innerText = originalH1;
      banner.querySelector('p').innerText = originalP;
      banner.style.backgroundColor = originalBackgroundColor;
      container.style.display = 'flex';
      footer.style.display = 'block';
      body.style.backgroundImage = originalBackgroundImage;
      document.body.removeChild(newContent);
    });
  }, 5000);
});

