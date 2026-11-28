// Cria o título da página usando a API do DOM.
const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.textContent = "Meus Cartões";
document.body.appendChild(titulo);

// O container agrupa o botão e todos os cards.
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Cria o botão que adiciona novos cards.
const btnAdicionar = document.createElement("button");
btnAdicionar.type = "button";
btnAdicionar.textContent = "Adicionar card";
btnAdicionar.classList.add("btn-add");
container.appendChild(btnAdicionar);

// Este número fica fora do evento para continuar aumentando a cada clique.
let numeroDoCard = 0;

// Monta um card-modelo fora da página. Cada clique fará uma cópia dele.
const cardModelo = document.createElement("div");
cardModelo.classList.add("card");
cardModelo.style.width = "300px";
cardModelo.style.height = "450px";
cardModelo.style.backgroundColor = "#fff";
cardModelo.style.padding = "1rem";
cardModelo.style.borderRadius = "10px";
cardModelo.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.6)";

// O título começa com um texto padrão; será atualizado em cada cópia.
const tituloCard = document.createElement("h3");
tituloCard.textContent = "Meu cartão";
tituloCard.style.color = "#000";
tituloCard.style.textAlign = "center";
cardModelo.appendChild(tituloCard);

// Adiciona uma imagem ao modelo. O texto alternativo ajuda na acessibilidade.
const avatar = document.createElement("img");
avatar.src = "https://avatars.githubusercontent.com/u/221563114?v=4";
avatar.alt = "Avatar do GitHub";
avatar.classList.add("avatar");
cardModelo.appendChild(avatar);

//Adciona um paragrafo com texto conteudo do card
let paragrafo = document.createElement("p");
paragrafo.classList.add('descricao');
paragrafo.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat sunt doloremque natus, illo voluptatibus excepturi optio! Ipsa nobis modi temporibus voluptates aliquam, similique quis doloribus enim accusamus aperiam odit.'
paragrafo.style.textAlign='justify';
paragrafo.style.color="#000"
paragrafo.style.fontSize='1rem'
cardModelo.appendChild(paragrafo);

// O evento é executado sempre que o botão é clicado.
btnAdicionar.addEventListener("click", () => {
  numeroDoCard++;

  // cloneNode(true) copia o elemento e também seus filhos (título e imagem).
  const novoCard = cardModelo.cloneNode(true);

  // Busca o h3 dentro deste card, não no documento inteiro.
  const tituloDoNovoCard = novoCard.querySelector("h3");
  tituloDoNovoCard.textContent = `Meu cartão - ${numeroDoCard}`;

  // Cada card recebe seu próprio botão de remoção.
  const btnApagar = document.createElement("button");
  btnApagar.type = "button";
  btnApagar.textContent = "🗑️ apagar";
  btnApagar.classList.add("delete-card");
  btnApagar.style.padding="6px"
  btnApagar.style.borderRadius="6px";
  btnApagar.style.border='none'
  btnApagar.style.marginBottom='20px'
  btnApagar.style.backgroundColor='#fd8787'


  

  // A função de clique fecha sobre novoCard e remove somente este card.
  btnApagar.addEventListener("click", () => {
    novoCard.remove();
  });

  novoCard.appendChild(btnApagar);
  container.appendChild(novoCard);
});
