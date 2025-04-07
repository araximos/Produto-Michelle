  function toggleMenu() {
    const menu = document.getElementById('menuOptions');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }

  document.getElementById("close-assistant").addEventListener("click", function() {
    document.getElementById("assistant-container").style.display = "none";
  });
  
  // Frases que o boneco vai dizer
const assistantPhrases = [
  "Aqui, a matemática se junta à sustentabilidade para te ajudar a pensar sobre o mundo de um jeito diferente!",
  "Vamos conversar sobre consumo sustentável, ou seja, usar só o que a gente realmente precisa, sem desperdício. 💧🌱",
  "Nas atividades do site, você vai explorar temas como lixo na escola, petróleo no mar, desperdício de água e reflorestamento – tudo isso com a ajuda da matemática! 🧮✨",
  "Venha descobrir como nosso site é super legal, onde a matemática encontra assuntos de sustentabilidade por meio de diferentes atividades! Vamos lá!?",
  ];
  
  let currentPhrase = 0;
  
  function showNextPhrase() {
    const textElement = document.getElementById("assistant-text");
    textElement.textContent = assistantPhrases[currentPhrase];
    currentPhrase = (currentPhrase + 1) % assistantPhrases.length;
  }
  
  // Mostra uma nova frase a cada 8 segundos
  setInterval(showNextPhrase, 8000);
  
  // Botão para fechar o bonequinho
  document.getElementById("close-assistant").addEventListener("click", function () {
    document.getElementById("assistant-container").style.display = "none";
  });
  