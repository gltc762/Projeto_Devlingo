const elementos = document.querySelectorAll('.animar');

function exibirElemento() {
  const alturaJanela = window.innerHeight;
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    if (posicao < alturaJanela - 100) {
      el.classList.add('visivel');
    }
  });
}

window.addEventListener('scroll', exibirElemento);
window.addEventListener('load', exibirElemento);