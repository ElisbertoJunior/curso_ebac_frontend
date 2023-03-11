document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-sorteador");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numeroMaximo = parseInt(
      document.getElementById("numero-maximo").value
    );
    
    const numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
    const resultadoContainer = document.querySelector(".resultado");
    const resultado = document.getElementById("resultado-valor");

    resultado.innerHTML = numeroAleatorio;
    resultadoContainer.style.display = "block";
  });
});
