const previews = [
  { img: 'assets/preview1.png', text: 'Comece otimizando seu tempo com acesso rápido.' },
  { img: 'assets/preview2.png', text: 'Tenha uma área particular para registrar tudo o que precisa.' },
  { img: 'assets/preview3.png', text: 'Aprenda a salvar e organizar cada detalhe da sua rotina.' },
  { img: 'assets/preview4.png', text: 'Rastreie hábitos, humor e sono; registre seus sonhos, sua lista de gratidão e seus treinos.' },
  { img: 'assets/preview5.png', text: 'Aprenda a salvar e organizar cada detalhe da sua rotina.' },
  { img: 'assets/preview6.png', text: 'Crie um mural visual dos sonhos e das suas metas para manter o foco nos seus objetivos e impulsionar uma vida equilibrada e saudável.' },
  { img: 'assets/preview7.png', text: 'Filmes e animes preferidos. Mantenha tudo organizado e acessível.' },
  { img: 'assets/preview8.png', text: 'A biblioteca, perfeita para guardar seus livros.' }
];

let index = 0;

const imgEl = document.getElementById('preview-img');
const textEl = document.getElementById('preview-text');

setInterval(() => {
  imgEl.style.transform = 'translateX(-40px)';
  imgEl.style.opacity = '0';
  textEl.style.opacity = '0';
  textEl.style.transform = 'translateY(10px)';

  setTimeout(() => {
    index = (index + 1) % previews.length;

    imgEl.src = previews[index].img;
    textEl.textContent = previews[index].text;

    imgEl.style.transform = 'translateX(0)';
    imgEl.style.opacity = '1';
    textEl.style.opacity = '1';
    textEl.style.transform = 'translateY(0)';
  }, 500);
}, 5000);

const developerSection = document.querySelector(".developer-section");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      developerSection.classList.add("visible");
    }
  },
  { threshold: 0.2 }
);

observer.observe(developerSection);
